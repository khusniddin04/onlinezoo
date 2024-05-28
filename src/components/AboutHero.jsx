import React from 'react'
import "../style/aboutHero.css"
import { NavLink } from 'react-router-dom'
import panda_img from "../images/videoPanda.png"
function AboutHero() {
  return (
    <section className='aboutHero'>
      <div className="container">
        <div className="aboutHero__wrapper">
          <div className="aboutHero__left">
            <h1>Watch your favorite <span>animals online</span></h1>
            <p>Observe different animals from around the world online in live time. Help vulunteers to take a good care of animals, donate to your favorite ones.</p>
            <div className="aboutHero__cta">
              <NavLink to="/map">Watch now </NavLink>
               <NavLink to="/donate">Donate </NavLink>
            </div>

          </div>
          <div className="aboutHero__right">
            <NavLink to="/pandas"><img src={panda_img} alt="" /></NavLink>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default AboutHero