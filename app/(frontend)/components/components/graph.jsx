"use client"
import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components including the BarController
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController, // Register the BarController to enable bar charts
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Initialize the chart
      new Chart(ctx, {
        type: 'bar', // Bar chart type
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className=' h-[600px]'>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Graph;
