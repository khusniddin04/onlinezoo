import React from 'react'
import "../style/testimonials.css"
function TestimonialsCard({img, title}) {
  return (
    <div className='testimonialsCard'>
        <div className="testimonialsCard__top">
            <p>20 Decepmer 2020</p>
            <p>Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </p>
            <div></div>
        </div>
        <div className="testimonialCard__bottom">
            <img src={img} alt="" />
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default TestimonialsCard