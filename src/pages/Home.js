import React from 'react';
import "./styles/Home.css"

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to Your Dashboard</h2>
            <p>Here you can monitor your data, track performance, and stay updated with key metrics.</p>
            <div className="overview">
                <div className="overview-item">
                    <h3>Total Users</h3>
                    <p>1,234</p>
                </div>
                <div className="overview-item">
                    <h3>Revenue</h3>
                    <p>$12,345</p>
                </div>
                <div className="overview-item">
                    <h3>New Signups</h3>
                    <p>123</p>
                </div>
            </div>
        </div>
    );
};

export default Home;