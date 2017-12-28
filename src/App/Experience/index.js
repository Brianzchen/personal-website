import React from 'react';

import Section from 'components/Section';

import { experience } from 'lib/locations';

import SubSection from './SubSection';

import kiwiplan from './texts/kiwiplan';
import dhax from './texts/dhax';
import takeABreak from './texts/takeABreak';

const Experience = () => (
  <Section location={experience}>
    <SubSection
      title="Kiwiplan NZ"
      link="http://www.kiwiplan.com/"
    >
      {kiwiplan}
    </SubSection>
    <SubSection
      title="Dhax"
      link="https://dhax.surge.sh/"
    >
      {dhax}
    </SubSection>
    <SubSection
      title="Take a Break"
      link="https://brianzchen.github.io/take-a-break/"
    >
      {takeABreak}
    </SubSection>
  </Section>
);

export default Experience;
