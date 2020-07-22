import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <div>
        <nav
          href='#navbar'
          className='js-colorlib-nav-toggle colorlib-nav-toggle'
          data-toggle='collapse'
          data-target='#navbar'
          aria-expanded='false'
          aria-controls='navbar'
        >
          <i />
        </nav>
        <aside id='colorlib-aside' className='border js-fullheight'>
          <div className='text-center'>
            <div
              className='author-img'
              style={{ backgroundImage: 'url(images/sidebar-1.jpg)' }}
            />
            <h1 id='colorlib-logo'>
              <a href='index.html'>Inna Yedzinovich</a>
            </h1>
            <span className='email'>
              <i className='icon-mail'></i> innayedzinovich@gmail.com
            </span>
          </div>
          <nav id='colorlib-main-menu' role='navigation' className='navbar'>
            <div id='navbar' className='collapse'>
              <ul>
                <li className='active'>
                  <a href='#home' data-nav-section='home'>
                    Introduction
                  </a>
                </li>
                <li>
                  <a href='#about' data-nav-section='about'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#timeline' data-nav-section='timeline'>
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id='colorlib-main-menu'>
            <ul>
              <li>
                <a
                  href='https://twitter.com/yedzinovich'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-twitter2' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/yedzinovich/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-linkedin2' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Yedzinovich'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-github'></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className='colorlib-footer'>
            <p>
              <small>
                Made with <i className='icon-heart' aria-hidden='true' />
                <br></br>
                Thanks{' '}
                <a
                  href='https://colorlib.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Colorlib
                </a>{' '}
                for inspiration
              </small>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
