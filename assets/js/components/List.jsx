import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-smooth-dnd";

import ListCard from "./ListCard";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.getChildPayload = this.getChildPayload.bind(this);
  }

  onDrop(newState, event) {
    const { addedIndex, removedIndex, payload } = event;
    let newPos = addedIndex
    if (typeof newPos === "number") this.props.updateCandidacy(payload.id, newState, newPos, true);
  }

  getChildPayload(index) {
    return this.props.candidacies[index];
  }

  render() {
    return (
      <div className="wttj_fullstack-list">
        <h4 className="wttj_fullstack-list-header">
          {this.props.list.name}
          <span
            className=" ml-4"
          >
            3
          </span>
        </h4>
        <div
          className="wttj_fullstack-list-wrapper"
          id={this.props.list.state}
          onDragOver={this.dragOver}
        >
          <Container
            onDrop={(e) => this.onDrop(this.props.list.state, e)}
            onDragStart={this.onDragStart}
            getChildPayload={this.getChildPayload}
            groupName="wttj_fullstack-lists"
            dragClass="draggable-mirror"
          >
            {this.props.candidacies.map((candidacy, key) => (
              <ListCard key={key} candidacy={candidacy} />
            ))}
          </Container>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.shape({
    state: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  candidacies: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateCandidacy: PropTypes.func.isRequired,
};
