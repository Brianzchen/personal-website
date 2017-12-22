import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <h3>
    {props.value}
  </h3>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
