import React from "react";
import { useState, useRef } from "react";
import "./contact.scss";
import { Phone, Mail, GitHub } from "@material-ui/icons";
import LeetCodeIcon from "./LeetCodeIcon";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [active, setActive] = useState("email");
  const email = "Kevin.Figenshu@gmail.com";
  const phone = "(610) 608 0468";
  const github = "github.com/KFig21";
  const leetcode = "leetcode.com/KFig21";
  const [contactInfo, setContactInfo] = useState(email);
  const formRef = useRef();
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          setMessage("An error occured :(");
        }
      );
    setMessageVisible(true);
    setTimeout(async function () {
      setMessageVisible(false);
    }, 3300);
  };

  const handleInfo = (variable, str) => {
    setActive(str);
    setContactInfo(variable);
  };

  return (
    <div className="contact section" id="contact">
      <div className="container">
        <div className="contact-container-left">
          <h2>Lets get in touch</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="email" placeholder="Email" name="user_email" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Send</button>
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
      <div
        className={
          messageVisible ? "message-container active" : "message-container"
        }
      >
        <div className="message">{message}</div>
      </div>
    </div>
  );
}
