import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import InstitutionInfo from './pages/InstitutionInfo';
import GradingInfo from './pages/Gradinginfo';
import Dashboard from './dashboard/Dashboard';
// import Analytics from './dashboard/Analytics';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/institution-info" element={<InstitutionInfo />} />
        <Route path="/grading-info" element={<GradingInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/analytics" element={<Analytics />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
