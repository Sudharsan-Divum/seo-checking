import React from "react";
import "./contact.css";
import Navbar from "../../components/NavBar/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1> THis is the Contact Page </h1>
        <ul>
          <li>Name : Divum</li>
          <li>Location : Bangalore</li>
        </ul>
      </div>
    </>
  );
}
