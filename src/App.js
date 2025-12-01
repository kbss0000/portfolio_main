import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import MainPage from './pages/MainPage';

const App = () => {
    // Get basename from package.json homepage or use empty string for local dev
    const basename = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL).pathname : '';
    
    return (
        <Router basename={basename}>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default App;
