import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/footer.css"
import logo from "../images/Logo-large.svg"
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <nav className="footer__nav">
            <img className='footer_logo' src={logo} alt="" />
            <ul className='footer__list'>
              <li><NavLink to="/">about</NavLink></li>
              <li><NavLink to="/map">MAP</NavLink></li>
              <li><NavLink to="/pandas">Zoos</NavLink></li>
              <li><NavLink to="/contact">contact us</NavLink></li>
              <li>Design</li>
            </ul>
          </nav>
          <div className="description">
            <p>Design by Lemeshko Kateryna</p>
            <p>©RSSchool and ©Yem Digital 2021</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer