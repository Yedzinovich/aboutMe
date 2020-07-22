import React from 'react';

const About = () => {
  return (
    <div>
      <section className='colorlib-about' data-section='about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='row row-bottom-padded-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='col-md-12'>
                  <div className='about-desc'>
                    <span className='heading-meta'>About Me</span>
                    <h2 className='colorlib-heading'>Who Am I?</h2>
                    <p>
                      I recently graduated from Brooklyn College with a degree
                      in Computer Sceince. I am passionate about Software
                      Engineering, and I love designing and creating from
                      scratch, as well as improving existing products. As a
                      recent graduate, I have developed Desktop, Front-End and
                      Back-End applications development using various
                      technologies. I am a self-starter and highly motivated
                      creative thinkers who also know how to build real-world
                      products.
                    </p>
                    <p>
                      I'm looking for a job that will put my skills as a
                      Software Engineer to work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='colorlib-about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>What I do?</span>
              <h2 className='colorlib-heading'>
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className='row row-pt-md'>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-1'>
                <span className='icon'>
                  <i className='icon-bulb' />
                </span>
                <div className='desc'>
                  <h3>Programming </h3>
                  <p>
                    I have experience building applications using JavaScript,
                    NodeJS, Java, MongoDB, ReactJS, HTML, CSS and more.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-3'>
                <span className='icon'>
                  <i className='icon-data' />
                </span>
                <div className='desc'>
                  <h3>Data Structures & Algorithms</h3>
                  <p>
                    As coming from the CS background, I have good grasp over
                    fundamental concepts of DS, Algorithms and Math.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-5'>
                <span className='icon'>
                  <i className='icon-phone3' />
                </span>
                <div className='desc'>
                  <h3>Experience</h3>
                  <p>
                    .NET Software Developer Intern (Full-Time) at NYC Office of
                    the Mayor, Software Engineer Intern at Intersection Co.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
