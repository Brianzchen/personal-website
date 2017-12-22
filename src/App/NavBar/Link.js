import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px',
  height: '48px',
  color: 'white',
};

const Link = props => (
  <a
    style={style}
    href={`#${props.link}`}
  >
    {props.name}
  </a>
);

Link.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Link;
