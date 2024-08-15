import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
