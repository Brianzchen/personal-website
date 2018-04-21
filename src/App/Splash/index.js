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
      backgroundImage: 'url("public/images/splash.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      boxSizing: 'border-box',
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
