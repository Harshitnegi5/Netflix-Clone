import React from "react";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import info_icon from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png";
import Navbar from "../Navbar/Navbar";
import Titlecard from "../Titlecard/Titlecard";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            voluptatum voluptate minima aspernatur officia assumenda cumque
            harum debitis reiciendis eos!
          </p>
        <div className="hero-btn">
          <button className="btn "><img src={play_icon} alt="" />Play</button>
          <button className="btn dark-btn"> <img src={info_icon} alt="" /> More Info</button>
        </div>
      <Titlecard/>
        </div>
      </div>
      <div className="more-cards">
       <Titlecard title={"Blockbuster Movies"}/> 
       <Titlecard title={"Only on Netflix"}/> 
       <Titlecard title={"Upcoming"}/> 
       <Titlecard title={"Top Pics for you"}/> 
      </div>
    </div>
  );
};

export default Home;
