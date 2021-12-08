import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Section from '@lib/components/Section';
import withPrismic from '@lib/components/withPrismic';

import { experience } from '@lib/utils/locations';

import SubSection from './SubSection';

const sortList = (list) => list.sort((a, b) => (
  new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
));

const Experience = function (props) {
  return (
    <Section location={experience}>
      {
      sortList(props.list).map((exp) => (
        <SubSection
          key={exp.id}
          title={exp.title[0].text}
          link={exp.url.url}
        >
          {
            exp.description.map((o) => (
              <p
                key={uuid()}
              >
                {o.text}
              </p>
            ))
          }
        </SubSection>
      ))
    }
    </Section>
  );
};

Experience.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

Experience.defaultProps = {
  list: [],
};

export default withPrismic('list', 'experience')(Experience);
