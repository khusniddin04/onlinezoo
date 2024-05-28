import React from 'react'
import "../style/feedback.css"
import { NavLink } from 'react-router-dom'
import x_img from "../images/feedback_img.png"
function FeedBack() {
  return (
    <main>
      <section className='feedback'>
        <div className="container">
          <div className="leave__feedback">
            <div className="feedback__content">
              <h4>Leave feedback</h4>
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
              <label htmlFor="feedback">Feedback</label>
              <br />
              <input type="text" id='feedback1' />
              <br />
              <button>send</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FeedBack