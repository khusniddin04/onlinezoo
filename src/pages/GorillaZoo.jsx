import React from "react";
import zoo_img from "../images/zoo_pandas.png";
import zoo_img2 from "../images/zoo_eagles.png";
import zoo_img3 from "../images/zoo_gorillas.png";
import zoo_img4 from "../images/zoo_aligators.png";
import { NavLink } from "react-router-dom";
import "../style/zooEagle.css"
import Top from "../components/Top";
import ZooSwiper from "../components/ZooSwiper";
import ZooTexts from "../components/ZooTexts";
function GorillaZoo() {
  return (
    <main>
      <section className="zoo1 ">
        <div className="container">
          <div className="zoo1__wrapper">
            <div className="zoo1__left">
              <div className="zoo1_left_card">
                <NavLink to="/pandas">
                  <img className="pandas_img" src={zoo_img} alt="" />
                </NavLink>
                <p>Pandas</p>
              </div>
              <div className="zoo1_left_card">
                <NavLink to="/eagles">
                  <img src={zoo_img2} alt="" />
                </NavLink>
                <p>Eagles</p>
              </div>
              <div className="zoo1_left_card">
                <NavLink to="/gorilas">
                  <img src={zoo_img3} alt="" />
                </NavLink>
                <p>Gorillas</p>
              </div>
              <div className="zoo1_left_card">
                <NavLink to="/alligators">
                  <img src={zoo_img4} alt="" />
                </NavLink>
                <p>Aligators</p>
              </div>
            </div>
            <div className="zoo1__right">
              <Top title="Gorillas" text="Main cameras"/>
              <div className="zoo1_right_video">
              <iframe className="panda_iframe" src="https://www.youtube.com/embed/lc-2EbIEmwM" title="Gorillas Chest Beating! - Animal Nation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="zoo_right_title">
                <h4>Side cameras</h4>
              </div>
              <ZooSwiper/>
              <ZooTexts left_text1="Shenshuping Gengda Panda Center" left_text2="Imitation of the natural environment" left_text3="Mountains of southwest China" left_text4="Imitation of the natural environment" left_text5="600" left_text6="The yards at Shenshuping Gengda Panda Center in China's Wolong Valley are filled with bamboo--making for some very happy panda residents." right_text1="The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet." right_text2="Pandas are BIG eaters – every day they fill their tummies for up to 12 hours, shifting up to 12 kilograms of bamboo." right_text3="The giant panda’s scientific name is Ailuropoda melanoleuca, which means “black and white cat-foot”." right_text4="Female pandas give birth to one or two cubs every two years. Cubs stay with their mothers for 18 months before venturing off on their own." right_text5="Baby pandas are born pink and measure about 15cm." right_text6="These beautiful bears are endangered, and it’s estimated that only around 1,000 remain in the wild. That’s why we need to do all we can to protect them!"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GorillaZoo;
