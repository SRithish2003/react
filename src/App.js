import './App.css';

import {Movie1,Movie2,Movie3,Movie4} from './Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3><b>Top 4 Movies List</b></h3>
       
        <Movie1 mname="The God Father" year="1972" rating="9.2/10" />
        <Movie2 mname="Inception" year="2007" rating="8.8/10" />
        <Movie3 mname="Interstellar" year="2014" rating="8.7/10" />
        <Movie4 mname="Joker" year="2019" rating="8.4/10" />
    
      </header>
    </div>
  );
}
export default App;