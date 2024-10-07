import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useFilter } from '../context/FilterProvider';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';

export default function CombChart() {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { startDateFilter, endDateFilter, viewFilter, unitFilter, areaFilter } = useFilter();
  const [timeStamps, setTimeStamps] = React.useState([]);
  const [temperatures, setTemperatures] = React.useState([]);
  const [sensor, setSensor] = React.useState([])
  const [other, setOther] = React.useState([])
  const { data, error, loading } = useFetchData(`${BASE_URL}/time-relations/fetch-time-temp`)
  React.useEffect(() => {
    const fetchTimeTempData = async () => {
      const startDate = startDateFilter ? new Date(startDateFilter) : null;
      const endDate = endDateFilter ? new Date(endDateFilter) : null;
      const filteredData = data?.filter(item => {
        const [day, month, year] = item.time_stamp.split(" ")[0].split("-");
        const timePart = item.time_stamp.split(" ")[1];
        const formattedDate = new Date(`${year}-${month}-${day}T${timePart}`);
        const afterStartDate = !startDate || formattedDate >= startDate;
        const beforeEndDate = !endDate || formattedDate <= endDate;
        return afterStartDate && beforeEndDate;
      });
      setTimeStamps(filteredData?.map(item => item.time_stamp.split(" ")[1]));
      setTemperatures(filteredData?.map(item => parseFloat(item.temperature)));
      setSensor(filteredData?.map(item => item.sensor));
      setOther(filteredData?.map(item => item.other));
    };
    fetchTimeTempData();
  }, [startDateFilter, endDateFilter, data])
  return (
    <Wrapper error={error} loading={loading} skeletonHeight={"220px"} skeletonTitle={"Loading Trend over time"}>
      {timeStamps && temperatures && sensor && other && <LineChart
        series={[
          { data: temperatures, label: "Temperature", showMark: false },
          { data: sensor, label: "Sensor", showMark: false },
          { data: other, label: "Other", showMark: false, },
        ]}
        xAxis={[{
          scaleType: "point", data: timeStamps, labelStyle: { fontSize: "10px" }, tickLabelStyle: {
            fontSize: "10px", angle: 90,
            textAnchor: 'bottom', style: { fontWeight: 'bold' }
          }, tickSize: 4
        }]}
        yAxis={[{ tickLabelStyle: { fontSize: "12px" }, tickSize: 10 }]}
        height={240}
        slotProps={{ legend: { labelStyle: { fontSize: "10px", fontWeight: "bold" }, itemMarkWidth: 8, itemMarkHeight: 8, itemGap: 20 } }}
      />}
    </Wrapper>

  );
}
