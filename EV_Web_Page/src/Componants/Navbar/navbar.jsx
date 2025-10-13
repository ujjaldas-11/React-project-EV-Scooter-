import React from 'react'
import { NavLink, Link } from 'react-router-dom'
function navbar() {
  return (
    <div>
        <header>
        <nav>
          <div className="logo">⚡ Future EV's</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#specs">Specs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><NavLink to={'/pages/save'}><button>Save items</button></NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default navbar