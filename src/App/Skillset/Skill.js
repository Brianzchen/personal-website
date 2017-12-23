import React from 'react';
import PropTypes from 'prop-types';

const Skill = props => (
  <div>
    {props.name}
  </div>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Skill;
