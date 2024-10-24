import React from 'react'
import Grid from '@mui/material/Grid2';
import HeaderTextField from "../components/HeaderTextField"
import ViewSelector from '../components/ViewSelector';
import { intervalValues, refreshValues } from '../props';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} sx={{ padding: "0px 10px", display: "flex", background: "white" }}>
      <Grid size={{ xs: 2, sm: 4, md: 6 }} sx={{ display: "flex" }}>
        <ViewSelector />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 3 }} sx={{ display: "flex", margin: "auto 0px" }}>
        <Typography sx={{ color: "#1d3254", fontSize: "12px", fontWeight: "bold", margin: "auto 5px" }}>Interval Time : </Typography>
        <HeaderTextField selectValues={intervalValues} type={1} />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 3 }} sx={{ display: "flex" }}>
        <Typography sx={{ color: "#1d3254", fontSize: "12px", fontWeight: "bold", margin: "auto 5px" }}>Refresh Time : </Typography>
        <HeaderTextField selectValues={refreshValues} type={2} />
      </Grid>
    </Grid>
  )
}

export default Header