import React from 'react'
import reactLogo from '../assets/images/react-logo.png'
import './navbar.css'
import Switch from './swich'

const NavBar = (props) => {
  console.log(props.darkMode)
  return (
   <div className={props.darkMode ? "darkNav" : "lightNav"}>
      <div className='logo'>
        <img src={reactLogo} alt="react logo" className='react-logo' />  
        <h2>ReactFacts</h2>
      </div>
      <div className='toggler'>
        <p 
          className='toggler--light'
          style={{color: props.darkMode && "#918E9B"}}
        >Light</p>
        <Switch 
          isOn={props.darkMode}
          toggleDark={props.toggleDark}
          />
        <p 
          className='toggler--dark'
          style={{color: props.darkMode && "#fff"}}>Dark</p>
      </div>
   </div> 
  )
}

export default NavBar 
