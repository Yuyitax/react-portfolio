import React from 'react'
import '../../src/index.css'

const Contact = () => {
  return (
    <div className='container contact' id='contact'>
      <h2>Get in Touch!</h2>

      <form action=''>
        <input type='text' name='name' placeholder='Full Name' required />
        <input type='text' name='email' placeholder='Email Address' required />
        <textarea name='message' rows='5' placeholder='How can I help you?' required />

      </form>
      </div>
  )
}

export default Contact