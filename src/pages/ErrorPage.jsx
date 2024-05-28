import React from 'react'
import "../style/errorPage.css"
import { NavLink } from 'react-router-dom'
import img from "../images/error_img.png"
function ErrorPage() {
  return (
    <main>
      <section className='error'>
        <div className="container">
          <div className="error__content">
            <h1>404</h1>
            <p>Oops, the page you are looking for doesn’t exist.</p>
            <NavLink to="/">Back Home</NavLink>
          </div>
          <div className="error__img">
              <img src={img} alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ErrorPage