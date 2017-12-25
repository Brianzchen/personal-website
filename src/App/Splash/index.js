import React from 'react';

import { home } from 'lib/locations';

import Title from './Title';
import SocialMediaContainer from './SocialMediaContainer';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.forceUpdate();
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      height: `${window.innerHeight}px`,
      background: '#eeeeee', // TODO replace with image
    };

    return (
      <div style={style} id={home.link}>
        <Title />
        <SocialMediaContainer />
      </div>
    );
  }
}

export default Splash;
