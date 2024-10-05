import React from 'react'
import { Typography } from '@mui/material'
import DoghnutChart from '../components/DoghnutChart'
import Grid from '@mui/material/Grid2';

const ProductionRate = () => {
  return (
    <div style={{ padding: "5px 10px", border: "1px solid #d9d9d9", borderRadius: "10px", backgroundColor: "#f7f7f7", display: "flex", flexDirection: "column" }}>
      <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px" }}>Production Rate</Typography>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 3, sm: 8, md: 12 }} sx={{display: "flex", padding: "30px 0px 0px 0px"}}>
        <Grid size={{ xs: 1, sm: 8, md: 4 }}  sx={{ display: "flex", flexDirection: "column", marginTop: "auto", marginRight: "auto" }}>
          <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Current Rate</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>100</Typography>
        </Grid>
        <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ marginTop: "-28px" }}>
          <DoghnutChart />
        </Grid>
        <Grid size={{ xs: 1, sm: 8, md: 4 }}  sx={{ display: "flex", flexDirection: "column", marginTop: "auto", marginLeft: "auto" }}>
          <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Target Rate</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>72</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductionRate