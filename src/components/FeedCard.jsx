import React from "react";
import "../style/feed.css"
function FeedCard({img, text}) {
  return (
    <div className="feed__card">
      <div className="feed_card_img">
        <img src={img} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default FeedCard;
