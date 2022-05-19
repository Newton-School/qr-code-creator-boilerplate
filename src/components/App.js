import React, { useState } from "react";
import "../styles/App.css";

const Form = ({ setFormData }) => {
  const handleSubmit = (e) => {

  };

  return (
    <form onSubmit={handleSubmit} className="justify-content-center p-5">
      <h3 className="w-100 text-center">Enter details to create QR Code</h3>
    </form>
  );
};

const App = () => {

  return (
    <div id="main">
      <div className="container p-5">
        <h1 className="w-100 text-center p-3">QR Code Generator</h1>
        <div className="card justify-content-center p-2">
          <Form />
          <div className="d-flex flex-wrap justify-content-center p-3">
            <h3 className="w-100 text-center">Result QR Code</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
