import './App.css';
import React, { Component } from "react";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title="Mariana Player" aboutText="About" />
      <div className="container my-3">
        {/* <TextForm heading="Enter text to analyze" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
