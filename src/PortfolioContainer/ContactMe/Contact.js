import React from "react";
// import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");


  


  var templateParams = {
      name: name,
      email: email,
      message: message,
    };

 

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.send('service_vf9nzlf', 'template_y7vuihd', templateParams,'BVPXVog--P-HGCbSn')


            .then((response) => {


                console.log('SUCCESS!', response.status, response.text);


                alert('Message sent successfully');

                setMessage('');
                setName('');
                setEmail('');
                e.target.reset();
            },(error) => {
                console.log('FAILED...', error);
                alert('Some technical error');
            });
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header">
        <h3>Contact Me</h3>
        <p className="why">Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
          <div className="topCtn">
            <div className="callBtn btnTp">
              <FaPhoneAlt color=" rgb(255,180,0)"/>
              <p style={{color:"#fff"}}>PHONE</p>
              <span style={{color:"#fff"}}>Contact me </span>
              <p className="contactNo">
                <a href="tel:8726795981" target="_blank">
                  7566458512
                </a>
              </p>
            </div>
            <div className="emailBtn btnTp">
              <MdEmail color=" rgb(255,180,0)"/>
              <p style={{color:"#fff"}}>EMAIL</p>
              <span style={{color:"#fff"}}>Contact me on email address</span>

              <p className="contactNo">
                <a href="" target="_blank">

                 prabhatjain19950@gmail.com
                </a>
              </p>
            </div>
            <div className="addrBtn btnTp">

              <FaMapMarkerAlt color=" rgb(255,180,0)" />
              <p style={{color:"#fff"}}>LOCATION</p>
              <span style={{color:"#fff"}}>Post-Kesli, Madhya Pradesh 470235 </span>

              <p className="contactNo" >
                <a href="https://www.google.co.in/maps/place/Kesali,+Madhya+Pradesh+470235/@23.4312098,78.8156087,14z/data=!4m6!3m5!1s0x397f231af670ea3d:0xfb5a6b8016723034!8m2!3d23.4226066!4d78.8184432!16s%2Fg%2F122dydjw?entry=ttu" target="_blank" >

                  View on Google Map
                </a>
              </p>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="formInput">
              <div className="leftForm">
                <div className="rows">
                  <input
                    type="text"
                    name="user_name"
                    pattern="[A-Za-z]{3,}"
                   
                    id="name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    placeholder="Full Name: "
                    required={true}
                  />
                </div>
                <div className="rows">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    
                    placeholder="Your Email:"
                    required={true}
                  />
                </div>
                
              </div>
              <div className="rightForm">
                <div className="rows">
                  <textarea
                    name="message"
                    id="inputMessage"
                    cols="0"
                    rows="9"
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    placeholder="Your Message:"
                    required={true}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="formSubmit">
              <div className="sendButton" colSpan="2">
                <button type="submit" value="Send">Send Message</button>
              </div>
            </div>
          </form>

   <div className="main_form">
   
    </div>
        </div>
      </div>
    </div>
  );
}
