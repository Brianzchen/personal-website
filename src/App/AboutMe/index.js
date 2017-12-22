import React from 'react';

import Header from 'components/Header';

const text = `
  Self taught Front-end JavaScript developer focused on ReactJS + Redux.

  Advodate for agile and scrum.
`;

const style = {
  margin: 'auto',
  padding: '24px',
  maxWidth: '500px',
  whiteSpace: 'pre-line',
};

const AboutMe = () => (
  <div style={style}>
    <Header value="About Me" />
    {text}
  </div>
);

export default AboutMe;
