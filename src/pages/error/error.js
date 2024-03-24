import React from 'react'
import './error.css'

const Error = () => {
  return (
    <div>
      <div className='imm'><img src='broken.jpg'></img></div> 
      <div className='bloc'>
        <div className='num'> <span>404</span></div>
        <div className='phr'> <span>Sorry, the page not found</span></div>
      </div>
    </div>
  )
}

export default Error;