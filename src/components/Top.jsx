import React from 'react'
import img1 from "../images/info_icon.png"
import img2 from "../images/like_circle_icon.png"
import "../style/top.css"
function Top({title, text,}) {
  return (
    <div className='zooTop'>
        <div className="zooTop__descriptoin">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <div className="zooTop__icons">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
        
    </div>
  )
}

export default Top