import React from 'react';
import PropTypes from 'prop-types';

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
      color: '#333333', // TODO choose color in lib?
      paddingTop: `${this.context.navBarHeight}px`,
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

Splash.contextTypes = {
  navBarHeight: PropTypes.number,
};

export default Splash;
