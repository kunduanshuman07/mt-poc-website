import React from 'react'
import Wrapper from '../components/Wrapper'
import useFetchData from '../hooks/useFetchData'
import Criticality from '../components/Criticality';
import { Box, Typography } from '@mui/material';

const colorCodes = {
  1: "success",
  2: "warning",
  3: "error",
  4: "error"
}
const units = {
  Current: "mA",
  Temperature: "°C",
  Vibration: "mm/s"
}
const CompSituation = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { data, error, loading } = useFetchData(`${BASE_URL}/motor-health/fetch-motor-health`)
  return (
    <Wrapper error={error} loading={loading} skeletonHeight={"250px"} skeletonTitle={"Loading Motor Health"} noData={data?.length === 0}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
        }}
      >
        <Box sx={{ display: "flex", margin: "5px 0px", padding: "5px 10px" }}>
          <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", textAlign: "left" }}>Motor Health</Typography>
        </Box>
        {data?.map((d) => (
          <Criticality title={d?.parameter_type === "Temperature" ? "Temp" : d.parameter_type} valueString={`${parseFloat(d?.param_values).toFixed(2)} ${units[d?.parameter_type]}`} value={d?.param_values} compare={d?.parameter_type === "Current"?200:d?.parameter_type === "Vibration"?"10": "100"} color={colorCodes[d?.color_code]} />
        ))}
      </div>
    </Wrapper>
  )
}

export default CompSituation