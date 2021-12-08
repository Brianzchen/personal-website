import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Section from '@lib/components/Section';
import Text from '@lib/components/Text';
import withPrismic from '@lib/components/withPrismic';

import { aboutMe } from '@lib/utils/locations';

import Details from './Details';

const AboutMe = function (props) {
  return (
    <Section location={aboutMe}>
      <Details
        profilePicUrl={props.profile_pic.url}
        location={props.location[0].text}
      />
      <Text>
        {props.summary.map((o) => (
          <p key={uuid()}>
            {o.text}
          </p>
        ))}
      </Text>
    </Section>
  );
};

AboutMe.propTypes = {
  profile_pic: PropTypes.shape({
    url: PropTypes.string,
  }),
  location: PropTypes.arrayOf(PropTypes.object),
  summary: PropTypes.arrayOf(PropTypes.object),
};

AboutMe.defaultProps = {
  profile_pic: { url: '' },
  location: [{ text: '' }],
  summary: [],
};

export default withPrismic('single', 'about_me')(AboutMe);
