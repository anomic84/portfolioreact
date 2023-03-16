import React from 'react'
import { DiNpm, DiReact, DiSass } from 'react-icons/di';
import './tech.css'

const Tech = () => {
  return (
    <section className="app__tech gradient_bg" id="tech">
      <div className="app__tech-divider" />
      <br />
      <h2 className="app__tech-title">Technologies</h2>
      <div className="app__tech-list_area">
        <div className="app__tech-list-item">
          <DiReact size="3rem" color="var(--color-red)" />
          <div className="app__tech-list-item_container">
            <h4 className="app__tech-list-item_title">Front-End</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />React, Next, and <br />Vite</p>
          </div>
        </div>
        <div className="app__tech-list-item">
          <DiNpm size="3rem" color="var(--color-red)" />
          <div className="app__tech-list-item_container">
            <h4 className="app__tech-list-item_title">Back-End</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />Node, MySql2, Sequelize,<br /> and MongoDB</p>
          </div>
        </div>
        <div className="app__tech-list-item">
          <DiSass size="3rem" color="var(--color-red)" />
          <div className="app__tech-list-item_container">
            <h4 className="app__tech-list-item_title">Design</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />Tailwind, SCSS, and <br />Styled-Components</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Tech