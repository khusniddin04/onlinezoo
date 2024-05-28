import React from 'react'
import "../style/feed.css"
import hand_coin from "../images/hand_coin.png"
import hand_and_apple from "../images/apple_and_hand.png"
import monkey_icon from "../images/monkey_img.png"
import line from "../images/line.png"
import arrow_to_left from "../images/arrow_to_left.png"
import bg_img from "../images/feed_img.png"
import bg_img2 from "../images/bg_img2.png"
import bg_img3 from "../images/bg_img3.png"
import { NavLink } from 'react-router-dom'
import FeedCard from './FeedCard'
function Feed() {
  return (
    <section className='feed'>
        <img className='feed_img' src={bg_img} alt="" />
        <img className='feed_img2' src={bg_img2} alt="" />
        <img className='feed_img3' src={bg_img3} alt="" />
        <div className="container">
            <div className="feed_top">
                <h2>Pay and feed</h2>
                <NavLink to="/donate">Donate  to  volunteers</NavLink>
            </div>
            <div className="feed__grid"> 
                <div className="feed_position_img">
                    <img src={line} alt="" />
                    <img src={arrow_to_left} alt="" />   
                </div>
                <div className="feed_position_imgs2">
                    <img src={line} alt="" />
                    <img src={arrow_to_left} alt="" />   
                </div>
                <FeedCard img={hand_coin} text="You donate to your favourite animals"/>
                <FeedCard img={hand_and_apple} text="   Zoo Keepers feed animals with their favourite food"/>
                <FeedCard img={monkey_icon} text="Animals are healthy and happy"/>
            </div>
            <NavLink to="/donate" className="responsive_btn">Donate  to  volunteers</NavLink>
        </div>
    </section>
  )
}

export default Feed