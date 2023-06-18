
import React, { useState } from "react";
import Navbar from "./navbar";
import './contact.css';
import Footer from "./footer";
import main from '../Assets/Mommy.png';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-main">
        <Navbar/>
        <img src={main} alt="contact" className="image"/>
    <div className="contact-head" >
      <h2>Contact Us</h2>
      <p>Got a question please message us using the contact form below and one of our friendly team will get back to you</p>
      <form onSubmit={handleSubmit}>
        <div className="contact">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
