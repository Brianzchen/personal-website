import React from 'react';
import uuid from 'uuid/v1';

import Section from 'components/Section';

import { experience } from 'lib/locations';
import { getList } from 'lib/prismicGateway';

import SubSection from './SubSection';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    getList('experience').then(list => {
      this.setState({
        list: list.sort((a, b) => (
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        )),
      });
    });
  }

  render() {
    return (
      <Section location={experience}>
        {
          this.state.list.map(exp => (
            <SubSection
              key={exp.id}
              title={exp.title[0].text}
              link={exp.url.url}
            >
              {
                exp.description.map(o => (
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
  }
}

export default Experience;
