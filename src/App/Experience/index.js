import React from 'react';

import Section from 'components/Section';

import { experience } from 'lib/locations';

import SubSection from './SubSection';

import kiwiplan from './texts/kiwiplan';
import dhax from './texts/dhax';
import takeABreak from './texts/takeABreak';

const Experience = () => (
  <Section location={experience}>
    <SubSection title="Kiwiplan NZ">
      {kiwiplan}
    </SubSection>
    <SubSection title="Dhax">
      {dhax}
    </SubSection>
    <SubSection title="Take a Break">
      {takeABreak}
    </SubSection>
  </Section>
);

export default Experience;
