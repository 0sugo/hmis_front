import React, { useEffect } from 'react';
import Chart from 'chart.js';

const BarChart = ({ labels, data }) => {
  useEffect(() => {
    const canvas = document.getElementById('barChart');
    const ctx = canvas.getContext('2d');

    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Bar Dataset',
          data: data,
          backgroundColor: '#3354F4',
          borderColor: '#3354F4',
          borderWidth: 1,
          borderRadius: 12,
          fill: false,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: Math.max(...data)
          }
        }
      }
    });

    return () => newChart.destroy();
  }, [labels, data]);

  return <canvas id="barChart"></canvas>;
};

export default BarChart;
