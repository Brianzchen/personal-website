import React from 'react';

import Section from 'components/Section';
import Text from 'components/Text';

import { aboutMe } from 'lib/locations';

const text = `
  Self taught Front-end JavaScript developer focused on ReactJS + Redux.

  Advodate for agile and scrum.
`;

const AboutMe = () => (
  <Section location={aboutMe}>
    <Text>
      {text}
    </Text>
  </Section>
);

export default AboutMe;
