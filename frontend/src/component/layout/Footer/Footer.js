import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>Download our APP</h4>
            <p>Download App for Android or IOS mobile</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="appStore" />
        </div>
        <div className="midFooter">
            <h1>Ecommerce.</h1>
            <p>High Quality is our first priority</p>
            <p>Copyright 2023 &copy; SmithDbritto</p>
        </div>
        <div className="rightFooter">
            <h4>Follow us</h4>
            <a href="link">LinkedIn</a>
            <a href="link">Gmail</a>
            <a href="link">GitHub</a>
        </div>
    </footer>
  )
}

export default Footer