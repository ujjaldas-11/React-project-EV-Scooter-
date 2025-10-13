import React from 'react'

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
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default navbar