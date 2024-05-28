import React from 'react'
import "../style/howitwork.css"
import binokil from "../images/binokil.png"
import heart from "../images/headert.png"
import like_and_hand from "../images/like_hand.png"
import HowItWorkCard from './HowItWorkCard'

function HowItWork() {
  return (
    <section className='how__work'>
        <div className="container">
            <h2>How it works</h2>
            <div className="howitwork__grid">
                <HowItWorkCard img={binokil} text="Keep an eye on your favourite animals online"/>
                <HowItWorkCard img={heart} text="Keep an eye on your favourite animals online"/>
                <HowItWorkCard img={like_and_hand} text="Keep an eye on your favourite animals online"/>
            </div>
        </div>
    </section>
  )
}

export default HowItWork