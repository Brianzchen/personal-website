import React from 'react';

import NavBar from './NavBar';
import Splash from './Splash';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skillset from './Skillset';
import Education from './Education';
import Footer from './Footer';

const style = {
};

const App = () => (
  <div style={style}>
    <NavBar />
    <Splash />
    <AboutMe />
    <Experience />
    <Skillset />
    <Education />
    <Footer />
  </div>
);

export default App;
