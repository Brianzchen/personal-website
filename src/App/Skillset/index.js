import React from 'react';

import Section from 'components/Section';

import { skillset } from 'lib/locations';

import Skill from './Skill';

const style = {

};

const Skillset = () => (
  <Section
    style={style}
    location={skillset}
  >
    <Skill name="JavaScript" />
    <Skill name="ReactJS" />
    <Skill name="Redux" />
    <Skill name="client-side routing" />
    <Skill name="HTML" />
    <Skill name="CSS3" />
  </Section>
);

export default Skillset;
