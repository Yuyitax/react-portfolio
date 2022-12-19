import React from 'react'
import '../../src/index.css'
import photo from '../assets/code-symbol_blue.jpg';


const Portfolio = () => {
  return (
    <div className='flex flex-col flex-col-3 w-full sm:flex-cols-1 md:flex-cols-2 lg:flex-cols-3 gap-8 items-center content-center mt-8' id='portfolio'>
    <h2 className='text-right text-4xl mt-4'>Portfolio</h2>
        <div className="relative overflow-hidden">
          <a href="https://giveback-app2.herokuapp.com/">
            <img
            className="relative inset-0 h-auto w-[400px] object-cover transition  hover:-translate-y-1 hover:scale-110"
            src={photo}
            alt=""
          /></a>
        </div>

        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2 text-white">The GiveBack App - MERN Application</p>
        </div>
    </div>
  )
}

export default Portfolio