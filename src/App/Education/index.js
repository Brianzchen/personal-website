import React from 'react';

import Section from '@lib/components/Section';

import { education } from '@lib/utils/locations';

import School from './School';

const Education = function () {
  return (
    <Section location={education}>
      <School
        name="University of Auckland"
        location="Auckland, NZ"
        dateRange="2012 - 2015"
        studies="Computer Science and Statisics"
      />
    </Section>
  );
};

export default Education;
