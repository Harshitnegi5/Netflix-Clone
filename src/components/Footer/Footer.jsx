import React from "react";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
        <li>Help Centre</li>
      </ul>
      <p className="copyright-text">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
