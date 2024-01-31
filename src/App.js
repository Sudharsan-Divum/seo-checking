import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HelmetCaller from "./components/helmetCallerCompoenent/HelmetCaller";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HelmetCaller path={"/"} />} />
          <Route path="/details" element={<HelmetCaller path={"/details"} />} />
          <Route path="/contact" element={<HelmetCaller path={"/contact"} />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
