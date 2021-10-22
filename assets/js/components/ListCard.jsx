import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-smooth-dnd";

import Avatar from "./Avatar";

export default function ListCard(props) {
  return (
    <Draggable key={props.candidacy.id}>
      <div className="wttj_fullstack-list-card-wrapper px-3 pt-2 pb-1">
        <div className="wttj_fullstack-list-card">
          <div className="wttj_fullstack-list-card-inner">
            <div className="flex items-center">
              <Avatar candidacy={props.candidacy} />
              <div className="ml-4">
                <p className="mb-3">{props.candidacy.email}</p>
                <p >{props.candidacy.state}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

ListCard.propTypes = {
  candidacy: PropTypes.shape({
    email: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};
