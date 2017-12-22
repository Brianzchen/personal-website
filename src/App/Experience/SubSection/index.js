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
  <div style={style}>
    <Title value={props.title} />
    <Body value={props.children} />
  </div>
);

SubSection.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default SubSection;
