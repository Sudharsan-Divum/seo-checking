import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Contact from "./pages/contact/Contact";
import { HelmetProvider } from "react-helmet-async";
import dynamicKeywords from "./keywords/dynamicKeywords.json";
const App = () => {
  const getKeywords = (path) => {
    return dynamicKeywords[path]?.content || "";
  };

  return (
    <>
      <HelmetProvider>
        <>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    title={dynamicKeywords["/"].title}
                    description="This is a description only for the Home page"
                    canonicalUrl="https://example.com/Home"
                    keywords={getKeywords("/")}
                  />
                }
              />
              <Route
                path="/next"
                element={
                  <Details
                  title={dynamicKeywords["/next"].title}
                    description="This is a description only for the Detail page"
                    canonicalUrl="https://example.com/details"
                    keywords={getKeywords("/next")}
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <Contact
                  title={dynamicKeywords["/contact"].title}
                    description="This is a description for contact pages"
                    canonicalUrl="https://example.com/contact"
                    keywords={getKeywords("/contact")}
                  />
                }
              />
            </Routes>
          </Router>
        </>
      </HelmetProvider>
    </>
  );
};

export default App;
