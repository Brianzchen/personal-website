import React from 'react';

import Header from 'components/Header';

import { experience } from 'lib/locations';

import SubSection from './SubSection';

import kiwiplan from './texts/kiwiplan';
import dhax from './texts/dhax';
import takeABreak from './texts/takeABreak';

const Experience = () => (
  <div id={experience.link}>
    <Header value={experience.name} />
    <SubSection title="Kiwiplan NZ">
      {kiwiplan}
    </SubSection>
    <SubSection title="Dhax">
      {dhax}
    </SubSection>
    <SubSection title="Take a Break">
      {takeABreak}
    </SubSection>
  </div>
);

export default Experience;
