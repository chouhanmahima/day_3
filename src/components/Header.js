import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <h1>Family Wellness</h1>
        <p>MASSAGE THERAPY</p>
        <nav>
            <ul id="nav-links">
                <li className='home'>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>FAQ</li>
                <li>Contacts</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header