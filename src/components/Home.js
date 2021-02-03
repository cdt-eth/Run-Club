import React from 'react';
import logo from '../amrc-white.png'

const home = () => {
    return (
       <div className="homeBody">
          <h1>Home</h1>
          <img src={logo} className="App-logo" alt="logo" />

           <p>Home page body content</p>
       </div>
    );
}
 
export default home;