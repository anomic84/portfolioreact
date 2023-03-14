import React from 'react'
import { DiNpm, DiReact, DiSass } from 'react-icons/di';
import './tech.css'

const Tech = () => {
  return (
    <section className="app__tech gradient_bg">
      <div className="app__tech-divider" />
      <br />
      <h2 className="app__tech-title">Technologies</h2>
      <p className="app__tech-text">I've aquired a familiar understanding of many technologies used in the world of web development</p>
      <ul className="app__tech-list_area">
        <li className="app__tech-list-item">
          <DiReact size="3rem" color="var(--color-red)" />
          <div className="app__tech-list-item_container">
            <h4 className="app__tech-list-item_title">Front-End</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />React, Next, and <br />Vite</p>
          </div>
        </li>
        <li className="app__tech-list-item">
          <DiNpm size="3rem" color="var(--color-red)" />
          <div className="app__tech-list-item_container">
            <h4 className="app__tech-list-item_title">Back-End</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />Node, MySql2, Sequelize, and MongoDB</p>
          </div>
        </li>
        <li className="app__tech-list-item">
          <DiSass size="3rem" color="var(--color-red)" />
          <div className="app__tech-list-item_container">
            <h4 className="app__tech-list-item_title">Design</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />Tailwind, SCSS, and <br />Styled-Components</p>
          </div>
        </li>
      </ul>
    </section >
  )
}

export default Tech