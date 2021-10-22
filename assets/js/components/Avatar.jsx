/* global document */

import React from "react";
import PropTypes from "prop-types";


export default function Avatar(props) {
  // FIXME: Image with initial
  return (
    <div className="border rounded-full p-4">
      {props.candidacy.email[0].toUpperCase()}
    </div>
  );
}

Avatar.propTypes = {
  candidacy: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};
