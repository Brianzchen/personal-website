import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '8px',
};

const Button = props => (
  <div
    style={style}
    title={props.title}
  >
    B
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
