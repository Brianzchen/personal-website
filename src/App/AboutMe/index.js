import React from 'react';

import Section from 'components/Section';
import Text from 'components/Text';

import { aboutMe } from 'lib/locations';

import Details from './Details';

const text = `
  Self taught Front-end JavaScript developer focused on ReactJS + Redux.

  Advodate for agile and scrum.

  love to code in my free time and learn about new ways of doing old things more efficiently

  always thinking about how i can do things better and improve the current process.

  Like the follow all the latest trends but want to know why A is chosen instead of B

  My interests outside of coding inclde lifting heavy weights, window shopping, eating lots of food and of course, Sharon Wang.

  My greatest weakness in my opinion is naming variables.
`;

const AboutMe = () => (
  <Section location={aboutMe}>
    <Details />
    <Text>
      {text}
    </Text>
  </Section>
);

export default AboutMe;
