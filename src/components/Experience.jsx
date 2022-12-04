import React from 'react'
import '../../src/index.css'

const Experience = () => {
  return (
    <div className='experience'>
      <h2>Experience</h2>

      <div className='exp-box'>
        <span className='exp-title'>HTML</span>
        <div className='exp-bar'>
          <span className='skill-for html'>
             <span className='tooltip'>90%</span>
          </span>
        </div>
      </div>

      <div className='exp-box'>
        <span className='exp-title'>CSS</span>
        <div className='exp-bar'>
          <span className='skill-for css'>
             <span className='tooltip'>90%</span>
          </span>
        </div>
      </div>
      <div className='exp-box'>
        <span className='exp-title'>JavaScript</span>
        <div className='exp-bar'>
          <span className='skill-for js'>
             <span className='tooltip'>70%</span>
          </span>
        </div>
      </div>
      <div className='exp-box'>
        <span className='exp-title'>Reactjs</span>
        <div className='exp-bar'>
          <span className='skill-for react'>
             <span className='tooltip'>80%</span>
          </span>
        </div>
      </div>

      </div>
  )
}

export default Experience