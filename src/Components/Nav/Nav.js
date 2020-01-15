import React from 'react';
import '../Nav/Nav.css'

function Nav() {
  return (
    <main className='Nav'>
        <nav role="navigation" className="nav-top">
        <a className='about-link' href="#About">About</a>
        <a className='project-link' href="#Projects">Projects</a>
        <a className='contact-link' href="#Contact">Contact</a>
        {/* <a className='resume-link' href={resume} target="_blank">Resume</a> */}
    </nav>
    </main>
  );
}

export default Nav;