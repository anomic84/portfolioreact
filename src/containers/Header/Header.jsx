import React from 'react'
import me from '../../assets/Me.jpg'
import './header.css'

const Header = () => {
  return (
    <div className="app__header section__padding" id="home">
      <div className="app__header-content">
        <h1 className="gradient__text">Curious and Creative</h1>
        <p>spencerccarlson0@gmail.com</p>
      </div>
      <div className="app__header-image">
        <img src={me} alt="Spencer" />
      </div>
    </div>
  )
}

export default Header