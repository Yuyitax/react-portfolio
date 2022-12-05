import React from 'react';
import '../../src/index.css'
import CTA from './CTA';
import Me from '../assets/profile-photo.jpg'


export default function About () {
    return (
        <div className='container about' id='about'>
            <h2>
                About Me
            </h2>

            <div className='photo-box'>
                <img src={Me} alt='Yuyitax profile' className='me-photo'/>
            </div>

            <div className='about-text'>
                <p>My name is Cristina Yunes, an American raised in Venezuela, that pursued a Visual Communicator career and became passionate about web design in the process.</p> <br />
                <p>I help companies and individuals find solutions through digital outlets. I focus on Digital First and 508 Compliant web design (the world needs to be more inclusive, why not start with your website?)</p><br />
                <p>I am currently enrolled in a Web Developer Bootcamp through Georgia Tech University and hoping to graduate by December 19th, 2022.
                </p>
            </div>
            <CTA />
        </div>
    );
}