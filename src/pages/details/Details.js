import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import "./Details.css";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Details({title, description, canonicalUrl, keywords}) {
  return (
    <>
      <Helmet>
        <title> {title} | Details  Page </title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Navbar />
      <div className="details-container">
        <h1>Details</h1>
        <p className="para-2">
          {" "}
          Please click here to navigate back {"  "} <Link to="/"> Home </Link>
        </p>
      </div>
    </>
  );
}
