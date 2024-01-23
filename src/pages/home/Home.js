import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";

export default function Home() {
  return (
    <>
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
