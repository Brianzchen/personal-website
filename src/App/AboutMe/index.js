import React from 'react';

import Section from 'components/Section';
import Text from 'components/Text';

import { aboutMe } from 'lib/locations';

const text = `
  Self taught Front-end JavaScript developer focused on ReactJS + Redux.

  Advodate for agile and scrum.

  My interests outside of coding inclde lifting heavy weights, window shopping, eating lots of food and of course, Sharon Wang.

  My greatest weakness in my opinion is my inability to give variables good names.
`;

const AboutMe = () => (
  <Section location={aboutMe}>
    <Text>
      {text}
    </Text>
  </Section>
);

export default AboutMe;
