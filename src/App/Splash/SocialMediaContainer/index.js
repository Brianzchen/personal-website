import React from 'react';

import Button from './Button';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
};

const SocialMediaContainer = () => (
  <div style={style}>
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
