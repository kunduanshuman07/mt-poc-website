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
    const fontSize = 1;
    ctx.font = `${fontSize}em sans-serif`;
    const text = 'parts/min';
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
        backgroundColor: ['#12bfe6', '#1d3254', '#d3d3d3'],
        borderWidth: 1,
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

  return <Doughnut data={data} options={options} />;
};

export default DoghnutChart;
