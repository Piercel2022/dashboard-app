import React, { useState } from 'react';
import "./styles/Settings.css"

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
        document.body.style.backgroundColor = darkMode ? '#fff' : '#333';
        document.body.style.color = darkMode ? '#000' : '#fff';
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div className="setting-item">
                <h3>Dark Mode</h3>
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="setting-item">
                <h3>Account</h3>
                <button>Edit Profile</button>
                <button>Change Password</button>
            </div>
        </div>
    );
};

export default Settings;