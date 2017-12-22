import React from 'react';

import Header from 'components/Header';

import { education } from 'lib/locations';

import School from './School';

const Education = () => (
  <div id={education.link}>
    <Header value={education.name} />
    <School name="University of Auckland" />
    <School name="Udacity" />
  </div>
);

export default Education;
