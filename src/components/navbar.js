import React from 'react'
import reactLogo from '../assets/images/react-logo.png'
import './navbar.css'

const NavBar = () => {
  return (
   <div className='navbar'>
      <div className='logo'>
        <img src={reactLogo} alt="react logo" className='react-logo' />  
        <h2>ReactFacts</h2>
      </div>
      <div className='extra-title'>
        <h3>React Course - Project 1</h3>
      </div>
   </div> 
  )
}

export default NavBar 
