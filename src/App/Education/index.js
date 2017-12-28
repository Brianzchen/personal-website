import React from 'react';

import Section from 'components/Section';

import { education } from 'lib/locations';

import School from './School';

const Education = () => (
  <Section location={education}>
    <School
      name="University of Auckland"
      location="Auckland, NZ"
      dateRange="2012 - 2015"
      studies="Bachelor of Science: Computer Science and Statisics"
    />
  </Section>
);

export default Education;
