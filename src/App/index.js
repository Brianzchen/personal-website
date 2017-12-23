import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Splash from './Splash';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skillset from './Skillset';
import Education from './Education';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navBarHeight: 0,
    };

    window.addEventListener('resize', this.resize);
  }

  getChildContext() {
    return {
      navBarHeight: this.state.navBarHeight,
    };
  }

  componentWillUnmount() {
    window.removeEventListene('resize', this.resize);
  }

  navBarMounted = navBarHeight => {
    this.setState({ navBarHeight });
  }

  resize = () => {
    this.setState({ navBarHeight: this.navBar.offsetHeight });
  }

  render() {
    return (
      <div>
        <NavBar
          ref={o => { if (o !== null) this.navBar = o.container; }}
          setNavBarHeight={this.navBarMounted}
        />
        <Splash />
        <AboutMe />
        <Experience />
        <Skillset />
        <Education />
        <Footer />
      </div>
    );
  }
}

App.childContextTypes = {
  navBarHeight: PropTypes.number,
};

export default App;
