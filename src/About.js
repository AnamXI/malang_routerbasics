import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
  //Initializes Variables
  
  const navigate = useNavigate();

  return ( 
    <div className="App">
      <header className="App-header">  
        
        {/* Icon Spin */}
        <div className="AppCont">
          <div style={{height: '30vw', maxHeight: '300px'}}>       
          <img src={logo} className="App-logo" alt="logo" width={250} height={250}/>
          </div>
        <p><br></br>

            <h1>About</h1>

            <h4>Lorem ipsum dolor sit amet hello hello amazing</h4>

        </p>

        <button onClick={() => navigate('/Home')}><h1>Home</h1></button> 
      
        </div><br></br>
       
      </header>
    </div>
  );
}

export default Contact;

