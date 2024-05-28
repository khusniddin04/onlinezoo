import React from "react";
import zoo_img from "../images/zoo_panda_img.png";
import zoo_img2 from "../images/zoo_eagles.png";
import zoo_img3 from "../images/zoo_gorillas.png";
import zoo_img4 from "../images/zoo_aligators.png";
import Top from "../components/Top";
import "../style/zoosPage.css";
import { NavLink } from "react-router-dom";
import ZooSwiper from "../components/ZooSwiper";
import ZooTexts from "../components/ZooTexts";
function AligatorsZoo() {
  return (
    <main>
      <section className="zoo1 aligator">
        <div className="container">
          <div className="zoo1__wrapper">
          <div className="zoo1__left">
              <div className="zoo1_left_card">
                <NavLink  to="/pandas"><img className="pandas_img" src={zoo_img} alt="" /></NavLink>
                <p>Pandas</p>
              </div>
              <div className="zoo1_left_card">
                <NavLink to="/eagles"><img  src={zoo_img2} alt="" /></NavLink>
                <p>Eagles</p>
              </div>
              <div className="zoo1_left_card">
                <NavLink to="/gorilas"><img src={zoo_img3} alt="" /></NavLink>
                <p>Gorillas</p>
              </div>
              <div className="zoo1_left_card">
                <NavLink to="/alligators"><img src={zoo_img4} alt="" /></NavLink>
                <p>Aligators</p>
              </div>
            </div>
            <div className="zoo1__right">
              <Top title="Aligators" text="Main cameras"/>
              <div className="zoo1_right_video">
              <iframe className="panda_iframe" src="https://www.youtube.com/embed/X5Im4mMFK4A" title="The Alligators taking over America&#39;s golf courses - BBC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="zoo_right_title">
                <h4>Side cameras</h4>
              </div>
              <ZooSwiper/>
              <ZooTexts left_text1="Catalina Island" left_text2="Imitation of the natural environment" left_text3=" The coast of Southern California in the Gulf of Santa Catalina" left_text4="Fish" left_text5="In 2020, seven pairs of Bald Eagles nested on Catalina Island and four chicks fledged." left_text6="The bald eagle (Haliaeetus leucocephalus) is a bird of prey found in North America." right_text1="Distinguishing feature of the immature bald eagle over the mature bird is its black, yellow-tipped beak; the mature eagle has a fully yellow beak." right_text2="The bald eagle has sometimes been considered the largest true raptor (accipitrid) in North America." right_text3="The bald eagle has a body length of 70–102 cm. Typical wingspan is between 1.8 and 2.3 m  and mass is normally between 3 and 6.3 kg " right_text4="Female pandas give birth to one or two cubs every two years. Cubs stay with their mothers for 18 months before venturing off on their own." right_text5="BTo hunt fish, the eagle swoops down over the water and snatches the fish out of the water with its talons." right_text6="The bald eagle is a powerful flier, and soars on thermal convection currents. It reaches speeds of 56–70 km/h (35–43 mph) when gliding and flapping"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AligatorsZoo;
