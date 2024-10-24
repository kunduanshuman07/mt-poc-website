import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexLineChart = ({ height }) => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: 'Critical',
        data: [4, 4, 4, null]
      },
      {
        name: 'Critical',
        data: [3, null, 3, 3]
      },
      {
        name: 'Critical',
        data: [2, 2, null, 2]
      },
      {
        name: 'Critical',
        data: [null, 1, 1, 1]
      }
    ],
    options: {
      chart: {
        height: height,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 8,
        curve: 'smooth',
        colors: ['#EEAFAF']
      },
      markers: {
        size: 2,
        colors: ['#FF0000']
      },
      xaxis: {
        categories: [
          '11:20', '11:25', '11:30', '11:35'
        ],
        labels: {
          formatter: (value) => value
        }
      },
      yaxis: {
        show: true,
        labels: {
          formatter: (value) => {
            switch (value) {
              case 4:
                return 'Motor Health';
              case 3:
                return 'Temp Zone A';
              case 2:
                return 'Temp Zone B';
              case 1:
                return 'Temp Zone C';
              default:
                return "";
            }
          },
          style: {
            fontSize: '12px'
          }
        },
        min: 0,
        max: 5
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      tooltip: {
        enabled: true,
        shared: false,
        intersect: true,
      },
      grid: {
        show: false 
      }
    }
  });

  return (
    <div>
      <div id="chart" style={{}}>
        <ReactApexChart options={chartState.options} series={chartState.series} type="line" height={height} />
      </div>
    </div>
  );
};

export default ApexLineChart;
