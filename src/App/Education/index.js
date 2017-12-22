import React from 'react';

import Section from 'components/Section';

import { education } from 'lib/locations';

import School from './School';

const Education = () => (
  <Section location={education}>
    <School name="University of Auckland" />
    <School name="Udacity" />
  </Section>
);

export default Education;
