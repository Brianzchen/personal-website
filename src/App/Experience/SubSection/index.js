import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Body from './Body';

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const SubSection = props => (
  <div
    style={style}
    className="max-width"
  >
    <Title value={props.title} link={props.link} />
    <Body value={props.children} />
  </div>
);

SubSection.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default SubSection;
