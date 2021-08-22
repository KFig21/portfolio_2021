import React from "react";
import { useState } from "react";
import "./contact.scss";
// imgs
import arrowUp from "../../assets/arrows/arrowUp.png";
import shake from "../../assets/other/shake.svg";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      <a className="up-arrow" href="#technologies">
        <img className="arrow-img" src={arrowUp} alt="next section" />
      </a>
    </div>
  );
}
