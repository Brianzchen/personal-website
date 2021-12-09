import React from 'react';

import colors from '@lib/utils/colors';

import NavBar from './NavBar';
import Splash from './Splash';
import AboutMe from './AboutMe';
import Footer from './Footer';

const style = {
  color: colors.content,
};

const App = () => (
  <div style={style}>
    <NavBar />
    <Splash />
    <AboutMe />
    <Footer />
  </div>
);

export default App;
