import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
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

            <h1>Home</h1>
            <button onClick={() => navigate('/About')}><h1>About</h1></button> 
            <br></br><br></br>
            <button onClick={() => navigate('/Contact')}><h1>Contact</h1></button>

        </p>
      
        </div><br></br>
       
      </header>
    </div>
  );
}

export default Home;

