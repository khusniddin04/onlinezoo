import React from 'react'
import "../style/howitwork.css"
function HowItWorkCard({img, text}) {
  return (
    <div className='howwork__card'>
        <div className="howwork_card_img">
            <img src={img} alt="" />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default HowItWorkCard