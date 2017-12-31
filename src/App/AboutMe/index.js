import React from 'react';

import Section from 'components/Section';
import Text from 'components/Text';

import { aboutMe } from 'lib/locations';

import Details from './Details';
import summary from './summary';

const AboutMe = () => (
  <Section location={aboutMe}>
    <Details />
    <Text>
      {summary}
    </Text>
  </Section>
);

export default AboutMe;
