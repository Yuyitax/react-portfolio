import React from 'react'
import '../../src/index.css'

const Contact = () => {
  return (
    <div className='flex flex-col w-full sm:flex-cols-1 md:flex-cols-1 lg:flex-cols-1 gap-8 items-center content-center p-8 mt-8' id='contact'>
      <h2 className='text-right text-4xl mb-8 '>Get in Touch!</h2>
      
      <div className='w-[60%] flex items-center'> 
      <form action='https://formsubmit.co/el/tiyepe' method="POST">
        <input type='text' name='name' className="placeholder-text" placeholder='Full Name' required />
        <input type='email' name='email' placeholder='Email Address' required />
        <textarea name='message' rows='5' placeholder='How can I help you?' required />
        <button type='submit' className='btn btn-primary'>Submit Request!</button>
      </form>
      </div>
      </div>
  )
}

export default Contact