import React from 'react';
import PropTypes from 'prop-types';

import Section from '@lib/components/Section';
import withPrismic from '@lib/components/withPrismic';

import { aboutMe } from '@lib/utils/locations';

import Details from './Details';

const AboutMe = (props) => (
  <Section location={aboutMe}>
    <Details
      profilePicUrl={props.profile_pic.url}
      location={props.location[0].text}
    />
  </Section>
);

AboutMe.propTypes = {
  profile_pic: PropTypes.shape({
    url: PropTypes.string,
  }),
  location: PropTypes.arrayOf(PropTypes.object),
};

AboutMe.defaultProps = {
  profile_pic: { url: '' },
  location: [{ text: '' }],
};

export default withPrismic('single', 'about_me')(AboutMe);
