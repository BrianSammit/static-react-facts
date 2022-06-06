import React , { useState } from 'react'
import './app.css'
import NavBar from './components/navbar'
import Main from './components/main'


const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  function toggle() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <>
      <NavBar darkMode={darkMode} toggleDark={toggle}/>
      <Main darkMode={darkMode} />
    </>
  )
}

export default App
