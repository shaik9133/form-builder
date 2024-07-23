import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Createnewform from './createnewform';
import './App.css';
import Inputitems from './inputs/inputitems';

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-2">Form Builder</h1>
        <div className="border-b border-gray-300 my-4"></div>
        <h2 className="text-3xl font-semibold text-center pb-10">Your forms</h2>
        <Routes>
          <Route path="/" element={<Createnewform />} />
          <Route path="/inputitems" element={<Inputitems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
