import React from 'react'
import { Grid, Typography } from '@mui/material'
import DoghnutChart from './DoghnutChart'

const ProductionRate = () => {
  return (
    <div style={{ padding: "5px 10px", border: "1px solid #d9d9d9", borderRadius: "10px", backgroundColor: "#f7f7f7", display: "flex", flexDirection: "column" }}>
      <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px" }}>Production Rate</Typography>
      <Grid container sx={{display: "flex"}}>
        <Grid item md={2} sx={{ display: "flex", flexDirection: "column", marginTop: "auto", marginRight: "auto" }}>
          <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Current Rate</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>100</Typography>
        </Grid>
        <Grid item md={4.5} sx={{ marginTop: "-28px" }}>
          <DoghnutChart />
        </Grid>
        <Grid item md={2} sx={{ display: "flex", flexDirection: "column", marginTop: "auto", marginLeft: "auto" }}>
          <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Target Rate</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>72</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductionRate