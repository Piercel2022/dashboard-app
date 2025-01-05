import React from 'react';
import Chart from './Chart';
import Card from './Card';
import "./pages/styles/Dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="cards">
                <Card title="Users" value="1,234" />
                <Card title="Sales" value="$12,345" />
            </div>
            <div className="charts">
                <Chart type="bar" />
                <Chart type="line" />
            </div>
        </div>
    );
};

export default Dashboard;