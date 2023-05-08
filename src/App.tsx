import React from 'react';
import './App.css';
import Routing from './routing/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing></Routing>
      </BrowserRouter>
    </div>
  );
}

export default App;
