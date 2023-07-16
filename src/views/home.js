import React from "react";
import Dashboard from "../components/home/dashboard";
import About from "../components/home/about";
import Feature from "../components/home/feature";

function AppHome() {
  return (
    <div className="main">
      <Dashboard />
      <About />
      <Feature />
    </div>
  );
}

export default AppHome;
