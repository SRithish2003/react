import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Home} from './components/Home';
import Classprops from './Classprops';
import Functionprops from './Functionprops';




class App extends React.Component {
  render(){
  return (
  
    <div >
      <Home/>
          
     <Classprops name ="Rithish" place="Chennai"/>
     <Classprops name ="Ram" place="Madurai"/>
     <Classprops name ="Rajesh" place="Coimbatore"/>
     <Functionprops name='Riya' place="Theni"/>
</div>
  );
  }
}


export default App;
