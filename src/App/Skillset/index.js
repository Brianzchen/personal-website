import React from 'react';

import Section from 'components/Section';

import { skillset } from 'lib/locations';

import Skill from './Skill';

const Skillset = () => (
  <Section
    location={skillset}
  >
    <Skill name="JavaScript" />
    <Skill name="ReactJS" />
    <Skill name="Redux" />
    <Skill name="Client-side routing" />
    <Skill name="Webpack" />
    <Skill name="Babel" />
    <Skill name="SPA/PWA best practices" />
    <Skill name="HTML5" />
    <Skill name="CSS3" />
  </Section>
);

export default Skillset;
