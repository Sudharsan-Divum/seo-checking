import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function HelemtWrapper({ title, description, keywords }) {
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
      };

      fetchData();
    }
  }, [details, title, description, keywords]);

  return (
    <>
      <Helmet>
        <title> {title || ""} </title>
        <meta
          name="description"
          content={description || ""}
          property="og:title"
        />
        <meta name="keywords" content={keywords || ""} />
        <meta property="og:title" content={title || ""} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title || ""} />
        <meta name="twitter:description" content={description || ""} />
      </Helmet>
    </>
  );
}
