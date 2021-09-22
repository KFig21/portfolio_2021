import React from "react";
import { useState } from "react";
import "./contact.scss";
import { Phone, Mail, GitHub } from "@material-ui/icons";
import LeetCodeIcon from "./LeetCodeIcon";
// imgs
import arrowUp from "../../assets/arrows/arrowUp.png";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [active, setActive] = useState("mail");
  const email = "Kevin.Figenshu@gmail.com";
  const phone = "(610)-608-0468";
  const github = "github.com/KFig21";
  const leetcode = "leetcode.com/KFig21";
  const [contactInfo, setContactInfo] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const handleInfo = (variable, str) => {
    setActive(str);
    setContactInfo(variable);
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact-container-left">
          <h2>Lets get in touch</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
        <div className="contact-container-right">
          <div className="right-content">
            <h3>Contact Info</h3>
            <p>Feel free to contact me or check me out on other platforms</p>
            <div className="info">
              {/* email */}
              <div className="item-container">
                <div
                  className={
                    active === "email"
                      ? "contact-icon-container active"
                      : "contact-icon-container"
                  }
                  onClick={() => handleInfo(email, "email")}
                >
                  <Mail className="icon" />
                </div>
                <div className="item-details">
                  <span className="item-span-title">Email:</span>
                  <span className="item-span" id="email-contact-span">
                    {email}
                  </span>
                </div>
              </div>
              {/* phone */}
              <div className="item-container">
                <div
                  className={
                    active === "phone"
                      ? "contact-icon-container active"
                      : "contact-icon-container"
                  }
                  onClick={() => handleInfo(phone, "phone")}
                >
                  <Phone className="icon" />
                </div>
                <div className="item-details">
                  <span className="item-span-title">Phone:</span>
                  <span className="item-span" id="phone-contact-span">
                    {phone}
                  </span>
                </div>
              </div>
              {/* github */}
              <div className="item-container">
                <div
                  className={
                    active === "github"
                      ? "contact-icon-container active"
                      : "contact-icon-container"
                  }
                  onClick={() => handleInfo(github, "github")}
                >
                  <GitHub className="icon" />
                </div>
                <div className="item-details">
                  <span className="item-span-title">Github:</span>
                  <a
                    className="item-span"
                    id="gitHub-contact-span"
                    href="https://github.com/KFig21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {github}
                  </a>
                </div>
              </div>
              {/* leetcode */}
              <div className="item-container">
                <div
                  className={
                    active === "leetcode"
                      ? "contact-icon-container active"
                      : "contact-icon-container"
                  }
                  onClick={() => handleInfo(leetcode, "leetcode")}
                >
                  <LeetCodeIcon class="icon" />
                </div>
                <div className="item-details">
                  <span className="item-span-title">Leetcode:</span>
                  <a
                    className="item-span"
                    id="gitHub-contact-span"
                    href="https://leetcode.com/KFig21/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {leetcode}
                  </a>
                </div>
              </div>
            </div>
            <div className="mobile-info-container">{contactInfo}</div>
          </div>
        </div>
      </div>

      <a className="up-arrow" href="#skills">
        <img className="arrow-img" src={arrowUp} alt="next section" />
      </a>
    </div>
  );
}
