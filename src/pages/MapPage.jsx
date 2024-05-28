import React from 'react'
import "../style/map.css"
import map_img from "../images/map_img2.png"
import alligator from "../images/crocodile.png"
import eagle from "../images/eagle.png"
import gorilla from "../images/gorilla.png"
import panda from "../images/panda.png"
import plus from "../images/plus.png"
import minus from "../images/minus.png"
import { NavLink } from 'react-router-dom'
function MapPage() {
  return (
    <main className='map_main'>
      <section className='map'>
        <div className="container">
          <div className="map_title">
            <h2>Choose your favorite Animal</h2>
          </div>
            <div className="map__img">
              <img className='map_img' src={map_img} alt="" />
              <NavLink to="/eagles"><img className='eagle' src={eagle} alt="" /></NavLink>
              <NavLink to="/alligators"><img className='alligator' src={alligator} alt="" /></NavLink>
              <NavLink to="/gorilas"><img className='gorilla' src={gorilla} alt="" /></NavLink>
              <NavLink to="/pandas"><img className='panda' src={panda} alt="" /></NavLink>
            </div>
            <div className="plus_minus">
              <img src={plus} alt="" />
              <img src={minus} alt="" />
            </div>
        </div>
      </section>
    </main>
  )
}

export default MapPage