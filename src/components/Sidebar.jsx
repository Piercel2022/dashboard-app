import React from 'react';
import { Link } from 'react-router-dom';
import './pages/styles/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Dashboard</h2>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/analytics">Analytics</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
