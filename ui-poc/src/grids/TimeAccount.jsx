import { Typography } from '@mui/material'
import React from 'react'
import TimeAccountBox from '../components/TimeAccountBox'

const TimeAccount = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0px 10px", border: "1px solid #d9d9d9", borderRadius: "10px", backgroundColor: "white" }}>
      <Typography sx={{ fontWeight: "600", marginTop: "5px", marginBottom: "2px", color: "#1d3254", fontSize: "14px" }}>Time Accounts</Typography>
      <TimeAccountBox title={"Active"} value={"02:06:22"} progress={50} bgc={'success'}/>
      <TimeAccountBox title={"Undefined"} value={"00:03:01"} progress={10} bgc={'warning'}/>
      <TimeAccountBox title={"Down Time"} value={"00:15:18"} progress={20} bgc={'error'}/>
      <TimeAccountBox title={"Setup Time"} value={"00:00:00"} progress={0} bgc={'info'}/>
      <TimeAccountBox title={"Planned Time"} value={"00:00:00"} progress={0} bgc={'secondary'}/>
      <TimeAccountBox title={"Total"} value={"00:00:00"} progress={80} bgc={'primary'}/>
    </div>
  )
}

export default TimeAccount