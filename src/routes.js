// routes.js
import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Contact from "./pages/contact/Contact";
import App from "./App";

export const Routing = () => {
  // const location = useLocation();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<Details />} />
          <Route
            path="/contact"
            element={
              <Contact
                title="How to Create Dynamic Meta Tags"
                description="Learn how to create dynamic meta tags in a React.js application for improved SEO."
                canonicalUrl="https://example.com/post/1"
                keywords="Opulent,Enigmatic,Tranquil,Voracious,Harmonious,Perspicacious,Ineffable,Obfuscate,Equanimity,Inscrutable"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
