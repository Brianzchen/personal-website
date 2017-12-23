import React from 'react';

import Section from 'components/Section';

import { education } from 'lib/locations';

import School from './School';

const Education = () => (
  <Section location={education}>
    <School
      name="University of Auckland"
      studies="Bachelor of Science: Double major in Computer Science and Statisics"
    />
    <School
      name="Udacity"
      studies="Front-end web developer Nanodegree"
    />
  </Section>
);

export default Education;
