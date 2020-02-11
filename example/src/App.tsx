import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TableEmpty } from 'xml-builder-react'

const App = () => {
  return (
    <div className="App">
      <TableEmpty columns={["uno"]}></TableEmpty>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
