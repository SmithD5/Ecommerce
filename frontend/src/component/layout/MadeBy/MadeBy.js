import React from "react";
import "./MadeBy.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="contactBtn" href="https://smith-dbritto.vercel.app/"a>
        <Button>Me: www.smith-dbritto.vercel.app</Button>
      </a>
    </div>
  );
};

export default Contact;