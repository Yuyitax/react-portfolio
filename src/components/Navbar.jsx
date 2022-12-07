import React from 'react'
import '../../src/index.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'


const Navbar = () => {
  return (
    <nav className='navbar'>
    <a href="#home"><AiFillHome/></a>
    <a href="#about"><FaUserCircle/></a>
    <a href="#experience"><FaBrain/></a>
    <a href="#portfolio"><BsFillBriefcaseFill/></a>
    <a href="#contact"><AiFillEdit/></a>
</nav>
  )
}

export default Navbar