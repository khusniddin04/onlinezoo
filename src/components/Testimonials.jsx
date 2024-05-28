import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/testimonials.css"
import comment_img from "../images/comment_img.png"
import testimonials1 from "../images/testimonials1.png"
import testimonials2 from "../images/testimonials2.png"
import testimonials3 from "../images/testimonials3.png"
import TestimonialsCard from './TestimonialsCard'
function Testimonials() {
  return (
    <section className='testimonials'>
        <div className="container">
            <div className="testimonials__top">
                <h2>Testimonials</h2>
                <NavLink to="/feedback"> <img src={comment_img} alt="" /> Leave feedback</NavLink>
            </div>
            <div className="testimonials__grid">
                <TestimonialsCard title="Adam, Spain" img={testimonials1}/>
                <TestimonialsCard title="Chris, Australia" img={testimonials2}/>
                <TestimonialsCard title="Amely, USA" img={testimonials3}/>
            </div>
            <NavLink to="/feedback" className="responsive_leave_btn"> <img src={comment_img} alt="" /> Leave feedback</NavLink>
        </div>
    </section>
  )
}

export default Testimonials