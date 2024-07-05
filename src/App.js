import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Wel_Come from './Wel_Come';
import Validator from './Validator';
import Validator_Info from './Validator_Info';
import About from './about';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/welcome" element={<Wel_Come />} />
            <Route path="/about" element={<About />} />
            <Route path="/validator/:id" element={<Validator_Info />} />
            <Route path="/validator" element={<Validator />} />
            <Route path="/" element={<Wel_Come />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
