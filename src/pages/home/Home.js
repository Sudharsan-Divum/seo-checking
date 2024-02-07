import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import HelmetCaller from "../../components/helmetCallerCompoenent/HelmetCaller";
import phone from "../../images/phone.png";
import { Helmet } from "react-helmet-async";
import product from "../../data/productDetails.json";

export default function Home() {
  return (
    <>
      <HelmetCaller />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "sku": "${product.id}",
              "name": "${product.name}",
              "gtin": "3hJ9wLpE5DxR7sY",
              "image": ["${product.image}"],
              "brand" : "${product.brand}",
              "description": "${product.description}",
              "price" :" ${product.price}",
              "offers": {
                "@type": "Offer",
                "price": "${product.offerPrice}",
                "priceCurrency": "INR",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock" 
              }
            }
            `}
        </script>
      </Helmet>
      <Navbar />
      <div className="home-container">
        <h1>Home</h1>
        <div className="product-card">
          <img src={phone} alt="Phone" className="product-image" />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Price:{" "}
              <span style={{ textDecoration: "line-through", color: "red" }}>
                {"₹"}
                {product.price}
              </span>
            </p>
            <p>
              Offer Price:{" "}
              <span style={{ color: "green" }}>
                {" "}
                {"₹"} {product.offerPrice}
              </span>
            </p>
            <p>
              Click Here for <Link to="/details">Details</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
