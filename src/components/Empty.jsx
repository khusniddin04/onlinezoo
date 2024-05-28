import React from 'react'
import "../style/empty.css"
import empty_img from "../images/empty_img.png"
import empty_img2 from "../images/empty_img_tablet.png"
import empty_img3 from "../images/empty_img_mobile.png"
function Empty() {
  return (
    <section className='empty'>
        <img className='empty_img' src={empty_img} alt="" />
        <img className='empty_img2' src={empty_img2} alt="" />
        <img className='empty_img3' src={empty_img3} alt="" />
    </section>
  )
}

export default Empty