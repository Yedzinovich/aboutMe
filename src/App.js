import React, { Fragment } from 'react';
import './App.css';

import About from './components/About';
import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {
  return (
    <div id='colorlib-page'>
      <div id='container-wrap'>
        <Sidebar />
        <div id='colorlib-main'>
          <Fragment>
            <Intro />
            <About />
            <Skills />
            <Education />
            <Experience />
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default App;
