import React from 'react'
import './cta.css';

const cta = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p className='gpt3__cta-content-p'> Request Early Access to Get Started</p>
        <h3 className='gpt3__cta-content-h3'>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type='button' className='gpt3__cta-btn-buttom'>Get Started</button>
      </div>
    </div>
  )
}

export default cta