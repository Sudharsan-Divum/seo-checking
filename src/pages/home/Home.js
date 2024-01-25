import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import { Helmet } from "react-helmet-async";

export default function Home({title, description, canonicalUrl, keywords}) {
  return (
    <>
      <Helmet>
      <title> {title} | Home  Page </title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Navbar />
      <div className="home-container">
        <h1> Home </h1>
        <p className="para">
          {" "}
          Please Click here to navigate to {""}
          <Link to="/next"> Details </Link>{" "}
        </p>
      </div>
    </>
  );
}
