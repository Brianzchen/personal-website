import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { boxShadow } from 'css';

import colors from 'lib/colors';

import Button from './Button';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: '24px auto',
    padding: '0 8px',
    backgroundColor: colors.white,
    borderRadius: '4px',
  },
});

const SocialMediaContainer = () => (
  <div
    className={`fade-in ${css(styles.container, boxShadow)}`}
  >
    <Button
      icon="github-circle"
      title="Github"
      link="https://github.com/Brianzchen"
    />
    <Button
      icon="linkedin-box"
      title="Linkedin"
      link="https://www.linkedin.com/in/brianzchen/"
    />
  </div>
);

export default SocialMediaContainer;
