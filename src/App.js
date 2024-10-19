import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import { BrowserRouter as Router, Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';

function App() {
  //Initializes Variables


  return ( 
    
    <div className="App">   

    <BrowserRouter>
      {/* <nav>
        <h1>Pages</h1>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav> */}
      <Routes>
        <Route path="/" element = {<Login />}></Route>
        <Route path="/Home" element = {<Home />}></Route>
        <Route path="/About" element = {<About />}></Route>
        <Route path="/Contact" element = {<Contact />}></Route>
      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;


