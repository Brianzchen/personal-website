import React from 'react';

import Header from 'components/Header';

import { experience } from 'lib/locations';

import SubSection from './SubSection';

import kiwiplanText from './kiwiplanText';
import dhaxText from './dhaxText';

const Experience = () => (
  <div id={experience.link}>
    <Header value={experience.name} />
    <SubSection title="Kiwiplan NZ">
      {kiwiplanText}
    </SubSection>
    <SubSection title="Dhax">
      {dhaxText}
    </SubSection>
  </div>
);

export default Experience;
