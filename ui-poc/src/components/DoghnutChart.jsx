import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart) {
    const width = chart.width;
    const height = chart.height / 1.2;
    const ctx = chart.ctx;
    ctx.restore();
    ctx.textBaseline = 'middle';
    ctx.fillStyle = ' #1d3254';
    const fontSize = 0.75;
    ctx.font = `${fontSize}em sans-serif`;
    const text = 'Parts / Min';
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height; 

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

const DoghnutChart = ({graphdata}) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [graphdata?.current_rate, graphdata?.target_rate - graphdata?.current_rate, graphdata?.total_rate - graphdata?.current_rate-graphdata?.target_rate],
        backgroundColor: ['#176084', '#ea7132', '#d3d3d3'],
        borderWidth: 4,
      },
    ],

  };

  const options = {
    cutout: '70%',
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  useEffect(() => {
    Chart.register(centerTextPlugin);
    return () => {
      Chart.unregister(centerTextPlugin); 
    };
  }, []);
  
  return <div
  //  style={{boxShadow: "0 0 5px #12bfe6, 0 0 5px #00f9ff, 0 0 5px #12bfe6, 0 0 5px #00f9ff", borderRadius: "100px", padding: "10px "}}
   >
    <Doughnut data={data} options={options}/>
  </div>;
};

export default DoghnutChart;
