import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';


import { useNavigate } from 'react-router-dom';

function Login() {
  //Initializes Variables
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const users = [
    {uname: "qwer", pass: "1234"},
    {uname: "asdf", pass: "abcd"}
  ];

  //const navigate = useNavigate();

  function login(e) {

    if (!uname || !pass) {
      setError('PLEASE ENTER CREDENTIALS');
      return;
    }

    const user = users.find(user => user.uname === uname && user.pass === pass);

    if (user) {

      //navigate('/Contact')

    } else {
      setError('Invalid Username || Password');
      }
    }

  return (    
    
    <div className="App">
        

      <header className="App-header">  
        
        {/* Icon Spin */}
        <div className="AppCont">
          <div style={{height: '30vw', maxHeight: '300px'}}>       
          <img src={logo} className="App-logo" alt="logo" width={250} height={250}/>
          </div>
        <p><br></br>

         {/* Input Fields */}
          <h1><strong>LOG IN</strong></h1>
          <br></br>
          <form onSubmit={login}>

            <h2>Username</h2>
            <input className='appText' type="text" value={(uname)} onChange={(e) => setUname(e.target.value)}></input><br></br>
            <h2>Password</h2>
            <input className='appText' type="text" value={(pass)} onChange={(e) => setPass(e.target.value)}></input><br></br>

          <br></br>
          <button type="submit" style={{margin: '0 5px 40px 0', padding: '0 40px 0 40px'}}><h1><strong>Log In</strong></h1></button>
          {error && <p>{error}</p>}


          </form>
          

        </p>
      
        </div><br></br>
       
      </header>
    </div>
  );
}

export default Login;


