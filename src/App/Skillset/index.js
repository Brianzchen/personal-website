import React from 'react';

import Header from 'components/Header';

import { skillset } from 'lib/locations';

const Skillset = () => (
  <div id={skillset.link}>
    <Header value={skillset.name} />
  </div>
);

export default Skillset;
