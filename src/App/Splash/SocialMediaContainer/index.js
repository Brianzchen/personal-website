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
    <Button icon="github" title="Github" />
    <Button icon="linkedin" title="Linkedin" />
  </div>
);

export default SocialMediaContainer;
