import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

const Section = (props, context) => {
  const style = {
    padding: `${context.navBarHeight}px 8px 0`,
  };

  return (
    <div
      style={{ ...style, ...props.style }}
      className="max-width"
      id={props.location.link}
    >
      <Header value={props.location.name} />
      {props.children}
      <hr />
    </div>
  );
};

Section.contextTypes = {
  navBarHeight: PropTypes.number,
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
