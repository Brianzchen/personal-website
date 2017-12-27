import React from 'react';
import PropTypes from 'prop-types';

import colors from 'lib/colors';

const style = {
  display: 'inline-block',
  borderRadius: '99px',
  padding: '4px 12px',
  margin: '4px',
  color: colors.white,
  background: colors.primary,
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
