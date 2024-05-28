import React, { useRef } from 'react'
import "../style/header.css"
import logo from "../images/Logo-large.svg"
import search from "../images/search.png"
import burger_menu from "../images/Burger-menu.png"
import { NavLink } from 'react-router-dom'
function Header() {
  let menu = useRef()
  let modal = useRef()
  function openBurger() {
    modal.current.classList.toggle("open")
  }
  function closeBurger() {
    modal.current.classList.remove("open")
  }
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <nav className='header__nav'>
             <NavLink  to="/"><img className="logo" src={logo} alt="" /></NavLink>
             <div onClick={closeBurger} ref={modal} className="modal_bg">
              <div className="modal">
                <ul className='modal__list'>
                  <li><NavLink to="/">about</NavLink></li>
                  <li><NavLink to="/map">MAP</NavLink></li>
                  <li><NavLink to="/pandas">Zoos</NavLink></li>
                  <li><NavLink to="/contact">contact us</NavLink></li>
                  <li>Design</li>
                  <li>
                    <div className="header__title">
                      <NavLink to="/login">Log in</NavLink>
                      <NavLink to="/signup">Sign up</NavLink>
                    </div>
                  </li>
                </ul>     
              </div>
             </div>
             <div onClick={openBurger} className='menu' >
              <img  ref={menu}  src={burger_menu} alt="" />
            </div>
              <ul className='header__list'>
                <li><NavLink to="/">about</NavLink></li>
                <li><NavLink to="/map">MAP</NavLink></li>
                <li><NavLink to="/pandas">Zoos</NavLink></li>
                <li><NavLink to="/contact">contact us</NavLink></li>
                <li>Design</li>
              </ul>
          </nav>
          <div className="header__cta">
            <img src={search} alt="" />
            <ul className='header__btn'>
              <li className='header__title1'><NavLink to="/login">Log in</NavLink></li>
              <li className='header__title2'><NavLink to="/signup">Sign up</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header