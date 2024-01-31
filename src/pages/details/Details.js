import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import "./Details.css";
import React, { useState, useEffect } from "react";
import HelemtWrapper from "../../components/HelmetComp/HelemtWrapper";

export default function Details({
  title,
  description,
  keywords,
}) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!details) {
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const fetchedDetails = {
          title: title,
          description: description,
          keywords: keywords,
        };
        setDetails(fetchedDetails);
        console.log("Data fetched after 1s:", fetchedDetails);
      };

      fetchData();
    }
  }, [details, title, description, keywords]);

  return (
    <>
      <>
        <HelemtWrapper
          title={title}
          description={description}
          keywords={keywords}
        />
        
        <Navbar />
        <div className="details-container">
          <h1>Details</h1>
          <p className="para-2">
            Please click here to navigate back <Link to="/">Home</Link>
          </p>
        </div>
      </>
    </>
  );
}
