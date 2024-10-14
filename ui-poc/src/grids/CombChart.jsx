import * as React from 'react';
import { useFilter } from '../context/FilterProvider';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';
import { Box, Button, Typography } from '@mui/material';
import LineChartGraph from "../components/LineChartGraph"
import GraphDialog from '../components/GraphDialog';

export default function CombChart() {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { startDateFilter, endDateFilter } = useFilter();
  const [timeStamps, setTimeStamps] = React.useState([]);
  const [zoneA, setZoneA] = React.useState([]);
  const [zoneB, setZoneB] = React.useState([])
  const [zoneC, setZoneC] = React.useState([])
  const { data, error, loading } = useFetchData(`${BASE_URL}/time-relations/fetch-temp-status`)
  const [openModal, setOpenModal] = React.useState(false);
  React.useEffect(() => {
    const fetchTimeTempData = async () => {
      const startDate = startDateFilter ? new Date(startDateFilter) : null;
      const endDate = endDateFilter ? new Date(endDateFilter) : null;
      const filteredData = data?.filter(item => {
        const [year, month, day] = item?.date_time.split(" ")[0].split("-");
        const timePart = item?.date_time.split(" ")[1];
        const formattedDate = new Date(`${year}-${month}-${day}T${timePart}`);
        const afterStartDate = !startDate || formattedDate >= startDate;
        const beforeEndDate = !endDate || formattedDate <= endDate;
        return afterStartDate && beforeEndDate;
      });
      setTimeStamps(filteredData?.map(item => item?.date_time.split(" ")[1]));
      setZoneA(filteredData?.map(item => parseFloat(item.zoneA)));
      setZoneB(filteredData?.map(item => item.zoneB));
      setZoneC(filteredData?.map(item => item.zoneC));
    };
    fetchTimeTempData();
  }, [startDateFilter, endDateFilter, data])
  return (
    <Wrapper error={error} loading={loading} skeletonHeight={"250px"} skeletonTitle={"Loading Temperature Status"} noData={data?.length === 0}>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "8px" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", textAlign: "left", marginLeft: "10px" }}>Processing Temperature Status</Typography>
          <Button size='small' sx={{ textTransform: "none", height: "0px", fontSize: "10px", margin: "auto 0px auto auto", ":hover": {background: "white", color: "#12bfe6"} }} onClick={() => setOpenModal(true)}>Zoom</Button>
        </Box>
        <LineChartGraph timeStamps={timeStamps} zoneA={zoneA} zoneB={zoneB} zoneC={zoneC} height={215}/>
      </Box>
      {openModal && <GraphDialog title={'Processing Temperature versus Time Graph'} open={openModal} setOpen={setOpenModal} children={<LineChartGraph timeStamps={timeStamps} zoneA={zoneA} zoneB={zoneB} zoneC={zoneC} height={400}/>} />}
    </Wrapper>

  );
}
