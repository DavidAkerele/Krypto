// import React from "react";
import techc from "../../assets/techcrunch.svg";
import fastc from "../../assets/fastcompany.svg";
import mit from "../../assets/mit.svg";
import forbes from "../../assets/forbes.svg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-container">
      <div className="title">
        <p>Featured On</p>
      </div>
      <div className="arr">
        <img className="pic" src={techc} alt="" />
        <img className="pic" src={fastc} alt="" />
        <img className="pic" src={mit} alt="" />
        <img className="pic" src={forbes} alt="" />
      </div>
    </div>
  );
};

export default Featured;
