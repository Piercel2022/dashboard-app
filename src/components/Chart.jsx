import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const Chart = ({ type }) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="chart">
            {type === 'bar' ? <Bar data={data} /> : <Line data={data} />}
        </div>
    );
};

export default Chart;