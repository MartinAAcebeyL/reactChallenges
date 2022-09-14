import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Nav from '../Nav/Nav';
import Home from '../../Views/Home';
import Reto1 from '../../Views/Reto1';
import './App.css'

function App() {
  return (
  <>
    <BrowserRouter>
      <Nav/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reto1" element={<Reto1/>} />
        <Route path="/reto2" element={<p>Hola desde reto 2</p>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
export default App;

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/