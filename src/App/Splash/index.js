import React from 'react';
import PropTypes from 'prop-types';

import withPrismic from 'components/withPrismic';

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
      backgroundImage: `url("${this.props.background_image.url}")`,
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

Splash.propTypes = {
  background_image: PropTypes.object,
};

Splash.defaultProps = {
  background_image: { url: '' },
};

export default withPrismic('single', 'splash')(Splash);
