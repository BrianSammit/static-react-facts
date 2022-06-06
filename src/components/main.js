import React from 'react'
import './main.css'

const Main = (props) => {
  return (
    <main className={props.darkMode ? "darkMain" : "lightMain"}>
      <h1 className='title'>Fun facts about React</h1>  
      <ul className='main--ul_facts'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K startso on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, incuding movile apps</li>
      </ul>
    </main>
  )

}

export default Main

