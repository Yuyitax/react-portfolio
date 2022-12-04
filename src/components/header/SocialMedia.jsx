import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const SocialMedia = () => {
  return (
    <div className='social-media'>
        <a href="https://github.com/Yuyitax" rel="noreferrer" target="_blank"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/cristinayunes/" rel="noreferrer" target="_blank"><AiFillLinkedin/></a>
        <a href="#contact"><MdEmail/></a>
    </div>
  )
}

export default SocialMedia