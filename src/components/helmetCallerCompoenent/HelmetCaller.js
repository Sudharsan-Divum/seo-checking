import React from "react";
import dynamicKeywords from "../../data/dynamicKeywords.json";
import HelmetWrapper from "../HelmetComp/HelemtWrapper";
import Home from "../../pages/home/Home";
import Details from "../../pages/details/Details";
import Contact from "../../pages/contact/Contact";

export default function HelmetCaller({ path }) {
  const { title, description, keywords } = dynamicKeywords[path] || {};

  return (
    <>
      {path === "/" && <Home />}
      {path === "/details" && <Details />}
      {path === "/contact" && <Contact />}
      <HelmetWrapper
        title={title || ""}
        description={description || ""}
        keywords={keywords || ""}
      />
    </>
  );
}
