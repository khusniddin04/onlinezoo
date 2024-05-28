import React from 'react'
import "../style/login.css"
import logo from "../images/register_img.png"
import google from "../images/Google Logo.png"
import facebook from "../images/facebook.png"
import { NavLink } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
function LogInPage() {
  return (
    <main>
      <section className='login'>
        <div className="container">
          <div className="login__card">
          <div className="card__top">
              <img src={logo} alt="" />
            </div>
             <NavLink to="/"><IoMdClose className='x_img' /></NavLink> 
            <ul className="login__navigation">
              <li><NavLink to="/signup">Create acccount</NavLink></li>  
              <li><NavLink to="/login">Log in</NavLink></li> 
            </ul>
            <div className="login__cta">
              <div className="login__google">
                    <img src={google} alt="" />
                    <p>Google <span className='no'>Sign in</span></p>
              </div>
              <div className="login__facebook">
                  <img src={facebook} alt="" />
                  <p>Facebook <span className='no'>Sign in</span></p>
              </div>
            </div>
            <form className='signup__form'>
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id='email' />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" id='password' />
            </form>
            <div className="login__btn">
              <button>Send</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LogInPage