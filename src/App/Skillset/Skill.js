import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { boxShadow } from 'css';

import colors from 'lib/colors';

const styles = StyleSheet.create({
  container: {
    display: 'inline-block',
    borderRadius: '99px',
    padding: '4px 12px',
    margin: '4px',
    color: colors.white,
    background: colors.primary,
    whiteSpace: 'nowrap',
  },
});

const Skill = props => (
  <span className={css(styles.container, boxShadow)}>
    {props.name}
  </span>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Skill;
