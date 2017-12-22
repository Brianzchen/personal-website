import React from 'react';

import Header from 'components/Header';
import Text from 'components/Text';

import { aboutMe } from 'lib/locations';

const text = `
  Self taught Front-end JavaScript developer focused on ReactJS + Redux.

  Advodate for agile and scrum.
`;

const AboutMe = () => (
  <div id={aboutMe.link}>
    <Header value={aboutMe.name} />
    <Text>
      {text}
    </Text>
  </div>
);

export default AboutMe;
