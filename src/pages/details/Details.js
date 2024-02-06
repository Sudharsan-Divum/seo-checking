import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import "./Details.css";
import React from "react";
import HelmetCaller from "../../components/helmetCallerCompoenent/HelmetCaller";
import { Helmet } from "react-helmet-async";
import product from "../../data/productDetails.json";

export default function Details() {
  return (
    <>
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
              },
              "review": 
                {
                  "@type": "Review",
                  "author": "Lucas",
                  "datePublished": "2011-03-25",
                  "reviewBody": "The product is worth the price, within this budget the camera was awesome.",
                  "name": "Value purchase",
                  "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "4",
                    "worstRating": "1"
                  }
                }
              
            }
            `}
          </script>
        </Helmet>
        <Navbar />
        <div className="details-container">
          <h1>Details</h1>
          <div className="product-card">
            <img src={product.image} alt="Phone" className="product-image" />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                Price:{" "}
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  {"₹"} {product.price}
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
                Click Here for <Link to="/contact">Details</Link>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
