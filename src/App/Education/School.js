import React from 'react';
import PropTypes from 'prop-types';

const School = props => (
  <div>
    {props.name}
  </div>
);

School.propTypes = {
  name: PropTypes.string.isRequired,
};

export default School;
