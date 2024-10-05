import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function CombChart({ time_stamp, temperature, sensor, other }) {
  return (
    <LineChart

      series={[
        { curve: "", data: temperature, label: "Temperature", showMark: false },
        { curve: "", data: sensor, label: "Sensor", showMark: false },
        { curve: "", data: other, label: "Other", showMark: false, },
      ]}
      xAxis={[{
        scaleType: "point", data: time_stamp, labelStyle: { fontSize: "10px" }, tickLabelStyle: {
          fontSize: "10px", angle: 90,
          textAnchor: 'bottom', style: { fontWeight: 'bold' }
        }, tickSize: 4
      }]}
      yAxis={[{ tickLabelStyle: { fontSize: "12px" }, tickSize: 10 }]}
      height={240}
      slotProps={{ legend: { labelStyle: { fontSize: "10px", fontWeight: "bold" }, itemMarkWidth: 8, itemMarkHeight: 8, itemGap: 20 } }}
    />
  );
}
