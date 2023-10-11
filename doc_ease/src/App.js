import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcomepage from './Components/Welcomepage';
import SignInSide from './Components/Login';
// import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/login" element={<SignInSide />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
