import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.tsx';
import AboutPage from './pages/About.tsx';
import ProjectPage from './pages/Projects.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
