import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ chartOptionsData, height }) => {
  const [chartOptions, setChartOptions] = useState({
    series: chartOptionsData?.series || [],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ['#176084', '#ea7132'],
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            enabled: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Motor Health', 'Temp Zone A', 'Temp Zone B', 'Temp Zone C'],
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val, opts) {
            const seriesIndex = opts?.seriesIndex || 0;
            const label = seriesIndex === 0 || seriesIndex === 2 ? 'Healthy' : 'Critical';
            return `${label}`;
          },
          title: {
            formatter: function (seriesName) {
              return '';
            },
          },
        },
        x: {
          formatter: function (val, opts) {
            const seriesData = chartOptionsData?.series?.[opts?.seriesIndex]?.data;
            const timeSegment = seriesData ? seriesData?.[opts?.dataPointIndex] : '';
            return `${timeSegment} hrs` || `${opts} : hrs`;
          },
        }
      },
      legend: {
        show: false,
      },
    },
  });


  useEffect(() => {
    if (chartOptionsData?.series) {
      setChartOptions({
        series: chartOptionsData.series,
        options: {
          chart: {
            type: 'bar',
            height: 370,
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          colors: ['#176084', '#ea7132'],
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                enabled: false,
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ['Motor Health', 'Temp Zone A', 'Temp Zone B', 'Temp Zone C'],
          },
          yaxis: {
            title: {
              text: undefined,
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val, opts) {
                const seriesIndex = opts?.seriesIndex || 0;
                const label = seriesIndex % 2 === 0 ? 'Healthy' : 'Critical';
                return `${label}`;
              },
              title: {
                formatter: function (seriesName) {
                  return '';
                },
              },
            },
            x: {
              formatter: function (val, opts) {
                const seriesData = chartOptionsData?.series?.[opts?.seriesIndex]?.data;
                const timeSegment = seriesData ? seriesData?.[opts?.dataPointIndex] : '';
                return `${timeSegment} hrs` || `${opts} : hrs`;
              },
            }
          },
          legend: {
            show: false,
          },
        },
      });
    }
  }, [chartOptionsData]);

  return (
    <>
      {chartOptionsData && <ReactApexChart
        options={chartOptions?.options}
        series={chartOptions?.series}
        type="bar"
        height={height}
      />}
    </>
  );
};

export default BarChart;
