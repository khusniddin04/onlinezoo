import React from 'react'
import tv from "../images/pets_tv.png"
import "../style/pets.css"
function PetCard({img,title,text}) {
  return (
    <div className='pet__card'>
        <div className="pets__img">
            <img src={img} alt="" />
        </div>
        <div className="pets__content">
            <div className="pets__text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <img src={tv} alt="" />
        </div>
    </div>
  )
}

export default PetCard