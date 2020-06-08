import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Section from 'components/Section';
import Text from 'components/Text';
import withPrismic from 'components/withPrismic';

import { aboutMe } from 'lib/locations';

import Details from './Details';

const AboutMe = (props) => (
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
