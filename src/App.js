
import React from 'react';
import './App.css';
import MainComp from './components/route';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <MainComp />
       </div>
    </BrowserRouter>
  );
}

export default App;
