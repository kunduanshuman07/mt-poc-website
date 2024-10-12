import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useFilter } from '../context/FilterProvider';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';
import { Box, Typography } from '@mui/material';

export default function CombChart() {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { startDateFilter, endDateFilter, deviceFilter} = useFilter();
  const [timeStamps, setTimeStamps] = React.useState([]);
  const [zoneA, setZoneA] = React.useState([]);
  const [zoneB, setZoneB] = React.useState([])
  const [zoneC, setZoneC] = React.useState([])
  const { data, error, loading } = useFetchData(`${BASE_URL}/time-relations/fetch-temp-status`)
  React.useEffect(() => {
    const fetchTimeTempData = async () => {
      const startDate = startDateFilter ? new Date(startDateFilter) : null;
      const endDate = endDateFilter ? new Date(endDateFilter) : null;
      const filteredData = data?.filter(item => {
        const [year, month, day] = item?.date_time.split(" ")[0].split("-");
        const deviceData = item?.deviceId === deviceFilter;
        const timePart = item?.date_time.split(" ")[1];
        const formattedDate = new Date(`${year}-${month}-${day}T${timePart}`);
        const afterStartDate = !startDate || formattedDate >= startDate;
        const beforeEndDate = !endDate || formattedDate <= endDate;
        return afterStartDate && beforeEndDate && deviceData;
      });
      setTimeStamps(filteredData?.map(item => item?.date_time.split(" ")[1]));
      setZoneA(filteredData?.map(item => parseFloat(item.zoneA)));
      setZoneB(filteredData?.map(item => item.zoneB));
      setZoneC(filteredData?.map(item => item.zoneC));
    };
    fetchTimeTempData();
  }, [startDateFilter, endDateFilter, data, deviceFilter])
  return (
    <Wrapper error={error} loading={loading} skeletonHeight={"250px"} skeletonTitle={"Loading Temperature Status"} noData={data?.length === 0}>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "8px" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", textAlign: "left", marginLeft: "10px" }}>Processing Temperature Status</Typography>
        </Box>
        <Box>
          {timeStamps && zoneA && zoneB && zoneC && <LineChart
            series={[
              { 
                data: Array(timeStamps.length).fill(20), 
                showMark: false, 
                color: 'red',
                label: 'Max'
              },
              { data: zoneA, label: "ZoneA", showMark: true, curve: 'linear' },
              { data: zoneB, label: "ZoneB", showMark: true, curve: 'linear' },
              { data: zoneC, label: "ZoneC", showMark: true, curve: 'linear' },
              { 
                data: Array(timeStamps.length).fill(70), 
                showMark: false, 
                color: 'red',
                label: 'Min'
              },
            ]}
            xAxis={[{
              scaleType: "point", data: timeStamps, labelStyle: { fontSize: "10px" }, tickLabelStyle: {
                fontSize: "10px", angle: 90,
                textAnchor: 'bottom', style: { fontWeight: 'bold' }
              }, tickSize: 4
            }]}
            yAxis={[{ tickLabelStyle: { fontSize: "12px" }, tickSize: 0, disableTicks: true, }]}
            height={215}
            slotProps={{ legend: { labelStyle: { fontSize: "10px", fontWeight: "bold" }, itemMarkWidth: 8, itemMarkHeight: 8, itemGap: 20 } }}
            grid={{horizontal: true, vertical: false}}
          />}
        </Box>
      </Box>
    </Wrapper>

  );
}
