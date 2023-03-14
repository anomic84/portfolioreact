import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine, RiReactjsFill } from 'react-icons/ri';
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-links_name">
          <p>Spencer C. Carlson</p>
        </div>
        <div className="app__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#tech">Technologies</a></p>
          <p><a href="#footer">Contact</a></p>
        </div>
      </div>
      <div className="app__navbar-icon">
        <p>Made with React</p>
        <RiReactjsFill className="app__navbar-icon_img" />
      </div>
      <div className="app__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#530E1A" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#530E1A" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="app__navbar-menu_container scale-up-center">
            <div className="app__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#projects">Projects</a></p>
              <p><a href="#tech">Technologies</a></p>
              <p><a href="#footer">Contact</a></p>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar