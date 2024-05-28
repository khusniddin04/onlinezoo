import React from "react";
import vector from "../images/Vector 23.png";
function ZooTexts({
  left_text1,
  left_text2,
  left_text3,
  left_text4,
  left_text5,
  left_text6,
  right_text1,
  right_text2,
  right_text3,
  right_text4,
  right_text5,
  right_text6,
}) {
  return (
    <div className="zooTexts__wrapper">
      <div className="zooTexts__left">
        <h2>Information</h2>
        <div className="left_info_card">
          <h4>Zoo</h4>
          <p className="left_text1">{left_text1}</p>
        </div>
        <div className="left_info_card">
          <h4>Type of aviary</h4>
          <p>{left_text2}</p>
        </div>
        <div className="left_info_card">
          <h4>Habitat</h4>
          <p className="left_text3"> {left_text3}</p>
        </div>
        <div className="left_info_card">
          <h4>Type of food</h4>
          <p>{left_text4}</p>
        </div>
        <div className="left_info_card">
          <h4>Population in the world</h4>
          <p>{left_text5}</p>
        </div>
        <div className="left_info_card">
          <h4>About species</h4>
          <p>{left_text6}</p>
        </div>
      </div>
      <div className="zooTexts__right">
        <h2>Interesting Facts</h2>
        <div className="right_text_card">
          <img src={vector} alt="" />
          <p>{right_text1}</p>
        </div>
        <div className="right_text_card">
          <img src={vector} alt="" />
          <p>{right_text2}</p>
        </div>
        <div className="right_text_card">
          <img src={vector} alt="" />
          <p>{right_text3}</p>
        </div>
        <div className="right_text_card">
          <img src={vector} alt="" />
          <p>{right_text4}</p>
        </div>
        <div className="right_text_card">
          <img src={vector} alt="" />
          <p>{right_text5}</p>
        </div>
        <div className="right_text_card">
          <img src={vector} alt="" />
          <p>{right_text6}</p>
        </div>
      </div>
    </div>
  );
}

export default ZooTexts;
