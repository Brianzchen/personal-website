import React from 'react';

import Button from './Button';

const style = {
  display: 'flex',
  margin: '24px auto',
  backgroundColor: 'white', // TODO color
  borderRadius: '4px',
};

const SocialMediaContainer = () => (
  <div style={style} className="box-shadow">
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
