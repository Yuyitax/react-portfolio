import React from 'react'
import './header.css'
import Me from '../../assets/profile-photo.jpg'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h1>Welcome to Yuyitax's Portfolio</h1>
        <SocialMedia />
        <div className='me'>
          <img src={Me} alt='Yuyitax profile'/>
        </div>
        <a href='#contact'></a>
        </div>
      </header>
  )
}

export default Header