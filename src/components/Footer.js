import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../css/Footer.css";
import facebook from "../Icons/facebook.png";
import google from "../Icons/google-plus.png";
import reddit from "../Icons/reddit.png";
import spotify from "../Icons/spotify.png";
import twitter from "../Icons/twitter.png";
import yelp from "../Icons/yelp.png";
import youtube from "../Icons/youtube.png";
function Footer() {
  let icons = [facebook, google, reddit, spotify, twitter, yelp, youtube];

  return (
    <div className="main-footer">
      <div className="icon-rows">
        {icons.map((icon) => (
          <button className="icon-button">
            <img src={icon} alt="" className="icons" />
          </button>
        ))}
      </div>
      <div className="contact-info">
        <h4>Office</h4>
        <h4>Movie Me Enterprise | 214-244-2450 1532 | Lubbock , Texas</h4>
        <h4>2021. All Rights Reserved | Movie Me by Group 13</h4>
      </div>
    </div>
  );
}
export default Footer;
