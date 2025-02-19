import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import TechnicalSkills from './pages/skills/TechnicalSkills';
import NonTechnicalSkills from './pages/skills/NonTechnicalSkills';
import Practice from './pages/Practice';
import PlacementDrives from './pages/PlacementDrives';
import Profile from './pages/Profile';
import CppDetails from './pages/skills/cpp/CppDetails';
import PythonDetails from './pages/skills/python/PythonDetails';
import JavaDetails from './pages/skills/java/JavaDetails';
import DataStructuresDetails from './pages/skills/data-structures/DataStructuresDetails';
import AlgorithmsDetails from './pages/skills/algorithms/AlgorithmsDetails';
import FrontendDetails from './pages/skills/frontend/FrontendDetails';
import BackendDetails from './pages/skills/backend/BackendDetails';
import QuantitativeAptitudeDetails from './pages/skills/aptitude/QuantitativeAptitudeDetails';
import LogicalReasoningDetails from './pages/skills/aptitude/LogicalReasoningDetails';
import VerbalCommunicationDetails from './pages/skills/communication/VerbalCommunicationDetails';
import NonVerbalCommunicationDetails from './pages/skills/communication/NonVerbalCommunicationDetails';
import MockInterviews from './pages/MockInterviews';
import CodeEditor from './pages/CodeEditor';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

const AppLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/skills/technical" element={<ProtectedRoute><TechnicalSkills /></ProtectedRoute>} />
        <Route path="/skills/non-technical" element={<ProtectedRoute><NonTechnicalSkills /></ProtectedRoute>} />
        <Route path="/practice" element={<ProtectedRoute><Practice /></ProtectedRoute>} />
        <Route path="/placement-drives" element={<ProtectedRoute><PlacementDrives /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/skills/technical/cpp" element={<ProtectedRoute><CppDetails /></ProtectedRoute>} />
        <Route path="/skills/technical/python" element={<ProtectedRoute><PythonDetails /></ProtectedRoute>} />
        <Route path="/skills/technical/java" element={<ProtectedRoute><JavaDetails /></ProtectedRoute>} />
        <Route path="/skills/technical/data-structures" element={<ProtectedRoute><DataStructuresDetails /></ProtectedRoute>} />
        <Route path="/skills/technical/algorithms" element={<ProtectedRoute><AlgorithmsDetails /></ProtectedRoute>} />
        <Route path="/skills/technical/frontend" element={<ProtectedRoute><FrontendDetails /></ProtectedRoute>} />
        <Route path="/skills/technical/backend" element={<ProtectedRoute><BackendDetails /></ProtectedRoute>} />
        <Route path="/skills/non-technical/quantitative-aptitude" element={<ProtectedRoute><QuantitativeAptitudeDetails /></ProtectedRoute>} />
        <Route path="/skills/non-technical/logical-reasoning" element={<ProtectedRoute><LogicalReasoningDetails /></ProtectedRoute>} />
        <Route path="/skills/non-technical/verbal-communication" element={<ProtectedRoute><VerbalCommunicationDetails /></ProtectedRoute>} />
        <Route path="/skills/non-technical/non-verbal-communication" element={<ProtectedRoute><NonVerbalCommunicationDetails /></ProtectedRoute>} />
        <Route path="/mock-interviews" element={<ProtectedRoute><MockInterviews /></ProtectedRoute>} />
        <Route path="/code-editor/:problemId" element={<ProtectedRoute><CodeEditor /></ProtectedRoute>} />
        <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/quiz/:skillType" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('supabase.auth.token');
  const location = useLocation();

  if (!token && location.pathname !== '/login') {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  if (token && location.pathname === '/login') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default App
