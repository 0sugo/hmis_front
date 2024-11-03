import React, { useEffect } from 'react';
import Chart from 'chart.js';

const DoughnutChart = ({ labels = [], data = [] }) => {
  useEffect(() => {
    const canvas = document.getElementById('doughnutChart');

    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get canvas context');
      return;
    }

    if (!Array.isArray(labels) || !Array.isArray(data)) {
      console.error('Labels and data must be arrays');
      return;
    }

    if (labels.length !== data.length) {
      console.error('Labels and data arrays must have the same length');
      return;
    }

    const newChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Doughnut Dataset',
          data: data,
          backgroundColor: [
            '#3354F4',
            '#FF4C5E',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
          ],
          borderColor: '#FFFFFF',
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += context.parsed;
                }
                return label;
              }
            }
          }
        }
      },
    });

    return () => newChart.destroy();
  }, [labels, data]);

  return <canvas id="doughnutChart"></canvas>;
};

export default DoughnutChart;
