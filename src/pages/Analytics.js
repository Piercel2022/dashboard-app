import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const Analytics = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [12000, 19000, 3000, 5000, 2000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="analytics">
            <h2>Analytics</h2>
            <div className="charts">
                <div className="chart-item">
                    <h3>Bar Chart</h3>
                    <Bar data={data} />
                </div>
                <div className="chart-item">
                    <h3>Line Chart</h3>
                    <Line data={data} />
                </div>
            </div>
        </div>
    );
};

export default Analytics;