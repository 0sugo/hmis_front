import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';


const LineChart = ({labels,lineChartData}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: lineChartData,
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto">
      <canvas ref={chartRef} className="w-full h-64"></canvas>
    </div>
  );
};

export default LineChart;
