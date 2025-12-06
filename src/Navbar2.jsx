import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import "./Navbar2.css"

const Navbar2 = () => {
  return (
    <div>
      <div>
        <nav className='nav'>
          <ul className='nav-item'>
            <li > <Link to='/' >Home</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar2
