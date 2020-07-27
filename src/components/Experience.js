import React from 'react';

const Experience = () => {
  return (
    <section class='colorlib-experience' data-section='experience'>
      <div class='colorlib-narrow-content'>
        <div class='row'>
          <div
            class='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
            data-animate-effect='fadeInLeft'
          >
            <span class='heading-meta'>Experience</span>
            <h2 class='colorlib-heading animate-box'>Work Experience</h2>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-12'>
            <div class='timeline-centered'>
              <article
                class='timeline-entry animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div class='timeline-entry-inner'>
                  <div class='timeline-icon color-1'>
                    <i class='icon-pen2'></i>
                  </div>

                  <div class='timeline-label'>
                    <h2>
                      <p>
                        Software Developer Intern at NYC Office of the Mayor
                      </p>{' '}
                      <span>Apr 2020 – Jul 2020</span>
                    </h2>
                    <p>
                      Produced code using .NET languages (C#, VB .NET),
                      Microsoft SQL Server and JavaScript. Upgraded, configured,
                      and debugged existing systems that assist 100.000+ New
                      York Five Boroughs homeowners. Utilized Microsoft
                      SharePoint, Office, Outlook, Excel, PowerPoint, and Visio
                      skills to create, update and restore supporting
                      documentation, data charts, use guides and presentations.
                      Worked in an Agile Environment, participated in everyday
                      meetings, and contributed to discussions of potential
                      resolutions to issues and problems.
                    </p>
                  </div>
                </div>
              </article>

              <article
                class='timeline-entry animate-box'
                data-animate-effect='fadeInRight'
              >
                <div class='timeline-entry-inner'>
                  <div class='timeline-icon color-2'>
                    <i class='icon-pen2'></i>
                  </div>
                  <div class='timeline-label'>
                    <h2>
                      <p>Software Engineer Intern at Intersection Co. </p>{' '}
                      <span>2019 - 2019</span>
                    </h2>
                    <p>
                      Developed a Full-Stack Web application for New York local
                      businesses and deployed it on AWS. Studied, implemented,
                      and critiqued new web technologies
                      (React/Redux/Node.js/AWS/Docker). Worked closely with
                      senior developers towards resolving problems that were
                      found during the testing process.
                    </p>
                  </div>
                </div>
              </article>

              <article
                class='timeline-entry animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div class='timeline-entry-inner'>
                  <div class='timeline-icon color-3'>
                    <i class='icon-pen2'></i>
                  </div>
                  <div class='timeline-label'>
                    <h2>
                      <p>Professor Assistant & Tutor</p> <span>2017-2018</span>
                    </h2>
                    <p>
                      Organized and facilitated study sessions to assist
                      students in various computer science courses taught in
                      Java and C++. Implemented different approaches and
                      adjusted teaching methods depending on the student’s
                      knowledge and information retention style. Developed
                      midterm and final examination reviews and Q&A sessions.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
