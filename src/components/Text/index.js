import React from 'react';
import PropTypes from 'prop-types';

const style = {
  margin: 'auto',
  padding: '0 24px',
  whiteSpace: 'pre-line',
};

const Text = props => (
  <div style={style}>
    {props.children}
  </div>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
