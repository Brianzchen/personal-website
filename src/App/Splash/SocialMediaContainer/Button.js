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
    className={`mdi mdi-${props.icon}`}
    title={props.title}
  >
    B
  </div>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
