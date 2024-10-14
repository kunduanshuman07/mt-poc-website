import React from 'react'
import Wrapper from '../components/Wrapper'
import useFetchData from '../hooks/useFetchData'
import Criticality from '../components/Criticality';
import { Box, Typography } from '@mui/material';

const CompSituation = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { data, error, loading } = useFetchData(`${BASE_URL}/time-accounts/fetch-time-accounts`)
  return (
    <Wrapper error={error} loading={loading} skeletonHeight={"250px"} skeletonTitle={"Loading Motor Health"} noData={data?.length !== 0}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundImage: "url('/motor.jpg')", 
          // backgroundSize: "cover", 
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          paddingBottom: "5px"
        }}
      >
        <Box sx={{ display: "flex", margin: "5px 0px", padding: "5px 10px" }}>
          <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", textAlign: "left" }}>Motor Health</Typography>
        </Box>
        <Criticality title={"Temp"} valueString={"74 °C"} value={74} compare={100} color={'success'} />
        <Criticality title={"Vibration"} valueString={"4.4 mm/s"} value={4.4} compare={10} color={'error'} />
        <Criticality title={"Current"} valueString={"94 A"} value={94} compare={200} color={'warning'} />
      </div>
    </Wrapper>
  )
}

export default CompSituation