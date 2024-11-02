
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllCourses from './pages/AllCourses';
import FullStack from './pages/FullStackCourses';
import DataScience from './pages/DataScienceCourses';
import CyberSecurity from './pages/CyberSecurityCourses';
import Career from './pages/CareerCourses';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AllCourses />} />
            <Route path="/fullstack" element={<FullStack />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
