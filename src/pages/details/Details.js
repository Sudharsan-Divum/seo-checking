import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import "./Details.css";
import React from "react";

export default function Details() {
  return (
    <>
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
