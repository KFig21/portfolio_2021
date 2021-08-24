import React from "react";
import { useState } from "react";
import "./contact.scss";
import { Person, Mail, GitHub, Code } from "@material-ui/icons";
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
      <div className="info">
        <div className="item-container" id="phone-contact-icon">
          <Person className="icon" />
          <span class="item-span" id="phone-contact-span">
            (610)-608-0468
          </span>
        </div>
        <div className="item-container" id="gitHub-contact-icon">
          <GitHub className="icon" />
          <a
            class="item-span"
            id="gitHub-contact-span"
            href="https://github.com/KFig21"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/KFig21
          </a>
        </div>
        <div className="item-container" id="email-contact-icon">
          <Mail className="icon" />
          <span class="item-span" id="email-contact-span">
            Kevin.Figenshu@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}
