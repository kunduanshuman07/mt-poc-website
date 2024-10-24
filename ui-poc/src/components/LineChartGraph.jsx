import { Box } from '@mui/material'
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const LineChartGraph = ({ timeStamps, zoneA, zoneB, zoneC, height }) => {
    return (
        <Box>
            {timeStamps && zoneA && zoneB && zoneC && <LineChart
                series={[
                    {
                        data: Array(timeStamps.length).fill(22),
                        showMark: false, connectNulls: true,
                        color: 'red',
                        label: 'Min'
                    },
                    { data: zoneA, label: "ZoneA", showMark: false, connectNulls: true, },
                    { data: zoneB, label: "ZoneB", showMark: false, connectNulls: true, },
                    { data: zoneC, label: "ZoneC", showMark: false, connectNulls: true, },
                    {
                        data: Array(timeStamps.length).fill(30),
                        showMark: false, connectNulls: true,
                        color: 'red',
                        label: 'Max'
                    },
                ]}
                xAxis={[{
                    scaleType: "point", data: timeStamps, labelStyle: { fontSize: "10px" }, tickLabelStyle: {
                        fontSize: "10px", angle: 90,
                        textAnchor: 'bottom', style: { fontWeight: 'bold' }
                    }, tickSize: 4
                }]}
                yAxis={[{ tickLabelStyle: { fontSize: "12px" }, tickSize: 0, disableTicks: true, }]}
                height={height}
                slotProps={{ legend: { labelStyle: { fontSize: "10px", fontWeight: "bold" }, itemMarkWidth: 8, itemMarkHeight: 8, itemGap: 20 } }}
                grid={{ horizontal: true, vertical: false }}
            />}
        </Box>
    )
}

export default LineChartGraph