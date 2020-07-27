import React from 'react';

const Skills = () => {
  return (
    <section class='colorlib-skills' data-section='skills'>
      <div class='colorlib-narrow-content'>
        <div class='row'>
          <div
            class='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
            data-animate-effect='fadeInLeft'
          >
            <span class='heading-meta'>My Technical Skills</span>
            <h2 class='colorlib-heading animate-box'>My Skills</h2>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-12 animate-box' data-animate-effect='fadeInLeft'>
            <p>
              I am motivated to acquire new levels of knowledge, or deepen my
              existing knowledge or skills in a significant way.
            </p>
          </div>
          <div class='col-md-6 animate-box' data-animate-effect='fadeInLeft'>
            <div class='progress-wrap'>
              <h3>JavaScript</h3>
              <div class='progress'>
                <div
                  class='progress-bar color-1'
                  role='progressbar'
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '75%' }}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 animate-box' data-animate-effect='fadeInRight'>
            <div class='progress-wrap'>
              <h3>ReactJS</h3>
              <div class='progress'>
                <div
                  class='progress-bar color-2'
                  role='progressbar'
                  aria-valuenow='70'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '70%' }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 animate-box' data-animate-effect='fadeInLeft'>
            <div class='progress-wrap'>
              <h3>NodeJS</h3>
              <div class='progress'>
                <div
                  class='progress-bar color-3'
                  role='progressbar'
                  aria-valuenow='73'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '73%' }}
                >
                  <span>73%</span>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 animate-box' data-animate-effect='fadeInRight'>
            <div class='progress-wrap'>
              <h3>Java</h3>
              <div class='progress'>
                <div
                  class='progress-bar color-4'
                  role='progressbar'
                  aria-valuenow='80'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '80%' }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 animate-box' data-animate-effect='fadeInRight'>
            <div class='progress-wrap'>
              <h3>RESTful API</h3>
              <div class='progress'>
                <div
                  class='progress-bar color-6'
                  role='progressbar'
                  aria-valuenow='80'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '80%' }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 animate-box' data-animate-effect='fadeInLeft'>
            <div class='progress-wrap'>
              <h3>MongoDB</h3>
              <div class='progress'>
                <div
                  class='progress-bar color-5'
                  role='progressbar'
                  aria-valuenow='70'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '70%' }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
