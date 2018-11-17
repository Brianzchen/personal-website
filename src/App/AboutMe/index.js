import React from 'react';
import uuid from 'uuid/v1';

import Section from 'components/Section';
import Text from 'components/Text';

import { aboutMe } from 'lib/locations';

import Details from './Details';

import { getSingle } from './prismicGateway';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePicUrl: '',
      summary: [],
    };

    getSingle('about_me').then(res => {
      this.setState({
        profilePicUrl: res.profile_pic.url,
        summary: res.summary,
      });
    });
  }

  render() {
    return (
      <Section location={aboutMe}>
        <Details
          profilePicUrl={this.state.profilePicUrl}
        />
        <Text>
          {this.state.summary.map(o => (
            <p key={uuid()}>
              {o.text}
            </p>
          ))}
        </Text>
      </Section>
    );
  }
}

export default AboutMe;
