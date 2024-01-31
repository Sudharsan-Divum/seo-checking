import React from "react";
import { Helmet } from "react-helmet-async";

export default function HelemtWrapper({
  title,
  description,
  keywords,
}) {
  return (
    <>
      <Helmet>
        <title> {title} </title>
        <meta name="description" content={description} property="og:title" />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    </>
  );
}
