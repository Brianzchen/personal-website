import React from 'react';
import PropTypes from 'prop-types';

const style = {
  textAlign: 'center',
};

const Title = function (props) {
  return (
    <h2 style={style}>
      {props.value}
    </h2>
  );
};

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
