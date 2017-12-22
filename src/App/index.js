import React from 'react';

import NavBar from './NavBar';
import Splash from './Splash';
import AboutMe from './AboutMe';
import Experience from './Experience';

const style = {
};

const App = () => (
  <div style={style}>
    <NavBar />
    <Splash />
    <AboutMe />
    <Experience />
  </div>
);

export default App;
