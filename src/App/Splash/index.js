import React from 'react';

import NavBar from './NavBar';
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
    };

    return (
      <div style={style}>
        <NavBar />
        <Title />
        <SocialMediaContainer />
      </div>
    );
  }
}

export default Splash;
