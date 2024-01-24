import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import React from "react";
import Contact from "./pages/contact/Contact";
import { Helmet } from "react-helmet";

export function Routing() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/next" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
     
    </>
  );
}
