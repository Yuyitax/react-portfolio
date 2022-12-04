import React from 'react';
import '../../src/index.css'
import CTA from './CTA';
import Me from '../assets/profile-photo.jpg'


export default function About () {
    return (
        <div className='about'>
            <h1>
                About Me
            </h1>
            <section className='bio-area'>
            <div className='photo-box'>
          <img src={Me} alt='Yuyitax profile' className='me-photo'/>
        </div>
        <p className='about-text'>My name is Cristina Yunes, an American raised in Venezuela, that pursued a Visual Communicator career and became passionate about web design in the process.<br />
        I help companies and individuals find solutions through digital outlets. I focus on Digital First and 508 Compliant web design (the world needs to be more inclusive, why not start with your website?)<br />
        I am currently enrolled in a Web Developer Bootcamp through Georgia Tech University and hoping to graduate by December 19th, 2022.</p>

            </section>
            <CTA />
        </div>
    );
}