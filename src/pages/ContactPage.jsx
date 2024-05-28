import React from 'react'
import "../style/contact.css"
import { NavLink } from 'react-router-dom'
import x_img from "../images/feedback_img.png"  
function ContactPage() {
  return (
    <main>
      <section className='contact'>
        <div className="container">
        <div className="contact__card">
            <div className="contact__content">
              <h4>Contact us</h4>
              <NavLink to="/"><img src={x_img} alt="" /></NavLink>
            </div>  
            <form >
              <label htmlFor="name">Name</label>
              <br />  
              <input type="text" id='name' />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id='email' />
              <br />
              <label htmlFor="feedback">Your message</label>
              <br />
              <input type="text" id='message' />
              <br />
              <button>send</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage