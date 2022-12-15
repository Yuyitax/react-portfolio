import React from 'react'
import '../../src/index.css'

const Experience = () => {
  return (
    <div className='flex flex-col w-full sm:flex-cols-1 md:flex-cols-1 lg:flex-cols-1 gap-8 items-center content-center mt-8' id='experience'>
      <h2 className='text-right text-4xl mt-4'>
      Experience
            </h2>
            <div className='experience w-[40%]'>

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

      </div>
  )
}

export default Experience