import React from 'react';
import PropTypes from 'prop-types';

const style = {
  borderRadius: '99px',
  padding: '4px 12px',
  margin: '2px 4px',
  background: 'aqua', // TODO replace
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
