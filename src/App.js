import React, { Fragment } from 'react';
import './App.css';

import About from './components/About';
import Intro from './components/Intro';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div id='colorlib-page'>
      <div id='container-wrap'>
        <Sidebar />
        <div id='colorlib-main'>
          <Fragment>
            <Intro />
            <About />
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default App;
