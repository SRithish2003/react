import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Home} from './components/Home';
import Classprops from './Classprops';
import Functionprops from './Functionprops';




 function App() {
  
  return (
  
    <div >
           <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RITHISH
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
  );
  }



export default App;
