import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

const Section = props => (
  <div id={props.location.link}>
    <Header value={props.location.name} />
    {props.children}
  </div>
);

Section.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

Section.defaultProps = {
  children: null,
};

export default Section;
