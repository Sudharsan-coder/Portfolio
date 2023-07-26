import React from "react";
import "./Mail.css";
import emailjs from "emailjs-com";
import mail_box from "../../../assets/Mail/mail_box.gif"
export default function Combiner() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vuguip4",
        "template_naotyvj",
        e.target,
        "AMiYoY4IlBwgvOWND"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="mail_container" id="Contact">
        <img src={mail_box}/>
        <form onSubmit={sendEmail} className="mail_form">
          <input type="submit" value="Send" />
          <textarea name="message" />
          <label>Message</label>
          <input type="email" name="user_email" />
          <label className="user_email">Email</label>
          <input type="text" name="user_name" />
          <label className="user_name">Name</label>
        </form>
        </div>
    </>
  );
}
