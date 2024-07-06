import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './Sidebar';
import WEL_COME from './WEL_COME';
import Validator from './Validator';
import ValidatorInfo from './ValidatorInfo';
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
            <Route path="/welcome" element={<WEL_COME />} />
            <Route path="/about" element={<About />} />
            <Route path="/validator/:id" element={<ValidatorInfo />} />
            <Route path="/validator" element={<Validator />} />
            <Route path="/" element={<WEL_COME />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
