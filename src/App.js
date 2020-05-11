import React from 'react';
import './App.css';
import ReastaurantSearch from './pages/index';

function App() {
  return (
    <div className="App container" >
      {/* <header className="App-header">
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
        <ReastaurantSearch />
      </header> */}
        <ReastaurantSearch />
    </div>
  );
}

export default App;
