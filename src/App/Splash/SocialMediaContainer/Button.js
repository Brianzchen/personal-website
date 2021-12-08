import React from 'react';
import PropTypes from 'prop-types';

const style = {
  margin: '8px 4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  cursor: 'pointer',
};

const Button = function (props) {
  return (
    <a
      style={style}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className={`mdi mdi-${props.icon}`}
        title={props.title}
      />
    </a>
  );
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
