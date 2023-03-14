import React from 'react'
import './projects.css'
import { projects } from '../../constants/constants';

const Projects = () => {
  return (
    <section className="app__projects gradient_bg2">
      <h2 className="app__projects-title">Projects</h2>
      <section className="app__projects-grid">
        {projects.map(({ id, image, imagealt, title, description, tags, source, visit }) => (
          <div className="app__projects-card" key={id}>
            <img src={image} alt={imagealt} />
            <div className="app__projects-card-title_area">
              <h3 className="app__projects-card-title">{title}</h3>
              <hr className="app__projects-card_hr" />
            </div>
            <p className="app__projects-card-info">{description}</p>
            <div className="">
            <hr className="app__projects-card_hr" />
              <div className="app__projects-card-title">Stack</div>
              <ul className="app__projects-card_footer-taglist">
                {tags.map((tag, i) => (
                  <li className="app__projects-card_footer-tag" key={i}>{tag}</li>
                ))}
              </ul>
            </div>
            <ul className="app__projects-card_utility-list">
              <li><a className="app__projects-card_utility-list_code" href={source}>Code</a></li>
              <li><a className="app__projects-card_utility-list_code" href={visit}> Visit</a></li>
            </ul>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Projects