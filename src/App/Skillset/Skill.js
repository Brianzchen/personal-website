import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'inline-block',
  borderRadius: '99px',
  padding: '4px 12px',
  margin: '4px',
  background: '#15e2d1', // TODO replace
  whiteSpace: 'nowrap',
};

const Skill = props => (
  <span style={style} className="box-shadow">
    {props.name}
  </span>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Skill;
