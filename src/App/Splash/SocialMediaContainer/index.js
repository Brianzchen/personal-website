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
    <Button title="Github" />
    <Button title="Linkedin" />
  </div>
);

export default SocialMediaContainer;
