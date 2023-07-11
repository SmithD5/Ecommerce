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
            <p>All the images belong to their respective owners.</p>
            <p>Made by Smith Dbritto</p>
        </div>
        <div className="rightFooter">
            <h4>Follow us</h4>
            <a href="https://www.linkedin.com/in/smith--dbritto/">LinkedIn</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=smith.dbritto8@gmail.com">Gmail</a>
            <a href="https://github.com/SmithD5">GitHub</a>
        </div>
    </footer>
  )
}

export default Footer