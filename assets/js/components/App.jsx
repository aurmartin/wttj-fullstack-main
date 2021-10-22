/* global document */

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Socket } from 'phoenix';

import ListContainer from '../containers/ListContainer';

const LISTS = [
  { state: 'new', name: 'Nouveau' },
  { state: 'refused', name: 'Refusé' },
  { state: 'to_meet', name: 'A rencontrer' },
  { state: 'interview', name: 'Entretien' },
  { state: 'accepter', name: 'Accepté' },
];

export default class App extends React.Component {
  componentDidMount() {
    this.props.loadingCandidacies(true);
    setTimeout(() => {
      // Temporary workaround to be sure that safari doesn't load from cache.
      axios.get(`/api/job/1/candidacy?_=${Math.floor(new Date() / 1000)}`).then((response) => {
        this.props.loadCandidacies(response.data.candidacies);
        this.props.loadingCandidacies(false);
      }).catch(() => {
        this.props.loadingCandidacies(false);
      });
    });

    this.initChannel();
  }

  initChannel() {
    const socket = new Socket('/socket');
    socket.connect();

    const channel = socket.channel('job:1');

    channel.join().receive('ok', (resp) => {
      console.log('Joined successfully', resp);
    }).receive('error', (resp) => {
      console.log('Unable to join', resp);
    });

    channel.on('card:update', (candidacy) => {
      this.props.updateCandidacy(candidacy.id, candidacy.state, candidacy.position, false);
    });
  }

  render() {
    return (
      <div className="wttj_fullstack-app">
        <div className="navbar">
          <a className="brand no-underline text-white font-bold" href="/">Wttj Fullstack</a>
        </div>
        <div className="wttj_fullstack-wrapper">
          {LISTS.map(list =>
            <ListContainer list={list} key={list.state} />)
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loadCandidacies: PropTypes.func.isRequired,
  loadingCandidacies: PropTypes.func.isRequired,
  updateCandidacy: PropTypes.func.isRequired,
};
