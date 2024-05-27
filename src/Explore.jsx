import React from "react";
import "./Explore.css";
import spy1 from "../imgs/spycarousel1.png";

const Explore = (props) => {
  return (
    <>
      <div className="introduction">
        <h1>Explore</h1>
        <div>What are you gonna watch today ?</div>
      </div>
      <div className="animeDetails">
        <img src={props.explore.image} alt="" className="explorePic" />
        <div className="op1"></div>
        <div className="details1">
          <h1 className="tilte">{props.explore.movieName}</h1>
          <p className="discription">{props.explore.description}</p>
        </div>
      </div>
    </>
  );
};

export default Explore;
