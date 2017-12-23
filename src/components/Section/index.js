import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

const Section = props => {
  const style = {
    paddingTop: '48px', // TODO use context
  };

  return (
    <div style={{ ...style, ...props.style }} id={props.location.link}>
      <Header value={props.location.name} />
      {props.children}
    </div>
  );
};

Section.propTypes = {
  style: PropTypes.object,
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

Section.defaultProps = {
  style: {},
  children: null,
};

export default Section;
