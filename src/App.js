import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Contact from "./pages/contact/Contact";
import { HelmetProvider } from "react-helmet-async";
import dynamicKeywords from "./keywords/dynamicKeywords.json";
const App = () => {
  const getKeywords = (path) => {
    return dynamicKeywords[path]?.keywords || "";
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
                    description={dynamicKeywords["/"].description}
                    keywords={getKeywords("/")}
                  />
                }
              />
              <Route
                path="/next"
                element={
                  <Details
                    title={dynamicKeywords["/next"].title}
                    description={dynamicKeywords["/next"].description}
                    keywords={getKeywords("/next")}
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <Contact
                    title={dynamicKeywords["/contact"].title}
                    description={dynamicKeywords["/contact"].description}
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
