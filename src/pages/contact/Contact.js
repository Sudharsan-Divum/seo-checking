import React from "react";
import "./contact.css";
import Navbar from "../../components/NavBar/navbar";
import { Helmet } from "react-helmet-async";

export default function Contact({
  title,
  description,
  canonicalUrl,
  keywords,
}) {
  return (
    <>
      <div>
        <Helmet>
          <title> {title} | Contact Page </title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
          <meta name="keywords" content={keywords} />
        </Helmet>
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
