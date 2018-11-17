import React from 'react';

import { home } from 'lib/locations';
import { getSingle } from 'lib/prismicGateway';

import Title from './Title';
import SocialMediaContainer from './SocialMediaContainer';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundUrl: '',
    };

    getSingle('splash').then(res => {
      this.setState({
        backgroundUrl: res.background_image.url,
      });
    });

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
      backgroundImage: `url("${this.state.backgroundUrl}")`,
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
