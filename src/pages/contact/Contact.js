import React from "react";
import "./contact.css";
import Navbar from "../../components/NavBar/navbar";
import HelmetCaller from "../../components/helmetCallerCompoenent/HelmetCaller";

export default function Contact() {
  return (
    <>
      <div>
        <HelmetCaller />
        <Navbar />
        <div className="contact-container">
          <h1> This is the Contact Page </h1>
          <ul>
            <li>Name : Divum</li>
            <li>Location : Bangalore</li>
          </ul>
        </div>
      </div>
    </>
  );
}
