import React from 'react';
import PropTypes from 'prop-types';

const School = props => (
  <div>
    <p>
      {props.name}
    </p>
    <p>
      {props.studies}
    </p>
  </div>
);

School.propTypes = {
  name: PropTypes.string.isRequired,
  studies: PropTypes.string.isRequired,
};

export default School;
