import React from 'react';
import '../../src/index.css'
import CTA from './CTA';
import Me from '../assets/profile-photo.jpg'


export default function About () {
    return (
        <div className='flex flex-col w-full sm:flex-cols-1 md:flex-cols-1 lg:flex-cols-1 gap-8 items-center content-center' id='about'>
            <h2 className='text-right text-4xl mb-8'>
                About Me
            </h2>

            <div className='flex items-center flex-cols-1 sm:flex-cols-2 md:flex-cols-2 lg:flex-cols-2 gap-10 w-[70%] ml-[14%]'>
                <img src={Me} alt='Yuyitax profile' className='w-[30%] items-center outline outline-8  outline-offset-2 outline-[#b26ebe]'/>
                <div className='grid grid-cols-1 gap-2 w-[40%]'>
                <p>My name is Cristina Yunes, an American raised in Venezuela, that pursued a Visual Communicator career and became passionate about web design in the process.</p>
                <br />
                <p>I am currently enrolled in a Web Developer Bootcamp through Georgia Tech University and hoping to graduate by December 19th, 2022.</p>
                </div>
            </div>
            <CTA />
        </div>
    );
}