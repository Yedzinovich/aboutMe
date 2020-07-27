import React from 'react';

const Education = () => {
  return (
    <section class='colorlib-education' data-section='education'>
      <div class='colorlib-narrow-content'>
        <div class='row'>
          <div
            class='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
            data-animate-effect='fadeInLeft'
          >
            <span class='heading-meta'>Education</span>
            <h2 class='colorlib-heading animate-box'>Education</h2>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-12 animate-box' data-animate-effect='fadeInLeft'>
            <div class='fancy-collapse-panel'>
              <div
                class='panel-group'
                id='accordion'
                role='tablist'
                aria-multiselectable='true'
              >
                <div class='panel panel-default'>
                  <div class='panel-heading' role='tab' id='headingOne'>
                    <h4 class='panel-title'>
                      <a
                        data-toggle='collapse'
                        data-parent='#accordion'
                        href='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        Bachelor of Science in Computer Science
                      </a>
                    </h4>
                  </div>
                  <div
                    id='collapseOne'
                    class='panel-collapse collapse in'
                    role='tabpanel'
                    aria-labelledby='headingOne'
                  >
                    <div class='panel-body'>
                      <div class='row'>
                        <div class='col-md-6'>
                          <p>Brooklyn College, CUNY</p>
                          <p>Relevant Coursework: </p>
                        </div>
                        <div class='col-md-6'>
                          <p>
                            Graduated in <strong> May 2020 </strong>
                          </p>
                          <p>
                            Analysis of Algorithms, Algorithms and Complexity,
                            Cryptography and Cryptoanalysis, Database Systems,
                            Data Structures, Probability and Statistics,
                            Unix/Linux.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='panel panel-default'>
                  <div class='panel-heading' role='tab' id='headingTwo'>
                    <h4 class='panel-title'>
                      <a
                        class='collapsed'
                        data-toggle='collapse'
                        data-parent='#accordion'
                        href='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Minsk State Lingustic University
                      </a>
                    </h4>
                  </div>
                  <div
                    id='collapseTwo'
                    class='panel-collapse collapse'
                    role='tabpanel'
                    aria-labelledby='headingTwo'
                  >
                    <div class='panel-body'>
                      <p>
                        Bachelor of Arts in Computational Linguistics (Completed
                        60 credits){' '}
                      </p>
                      <p>Relevant Coursework: </p>
                    </div>
                    <div class='col-md-6'>
                      <p>2012 - 2014</p>
                      <p>
                        Modern Russian and English Languages, General
                        Linguistics, Computational Linguistics, Machine Learning
                        for Computational Linguists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
