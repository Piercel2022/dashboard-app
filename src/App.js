import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="main-content">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;