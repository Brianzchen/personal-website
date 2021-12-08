import React from 'react';
import PropTypes from 'prop-types';

import Section from '@lib/components/Section';
import withPrismic from '@lib/components/withPrismic';

import { skillset } from '@lib/utils/locations';

import Skill from './Skill';

const Skillset = function (props) {
  return (
    <Section
      location={skillset}
    >
      {
      props.list.map((o) => (
        <Skill
          key={o.text}
          name={o.text}
        />
      ))
    }
    </Section>
  );
};

Skillset.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

Skillset.defaultProps = {
  list: [],
};

export default withPrismic('single', 'skil')(Skillset);
