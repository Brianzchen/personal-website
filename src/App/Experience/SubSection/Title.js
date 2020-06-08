import React from 'react';
import PropTypes from 'prop-types';

const style = {
  textDecoration: 'underline',
};

const Title = (props) => (
  <a
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 style={style}>
      {props.value}
    </h3>
  </a>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Title;
