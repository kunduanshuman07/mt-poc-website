import React from 'react';
import { Box, Typography } from '@mui/material';
import DoghnutChart from '../components/DoghnutChart';
import Grid from '@mui/material/Grid2';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';

const ProductionRate = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { data, error, loading } = useFetchData(`${BASE_URL}/production-rate/fetch-prod-rate`)
  return (
    <Wrapper loading={loading} error={error} skeletonHeight={"155px"} skeletonTitle={"Loading Production Rate"}>
      <div style={{
        padding: "5px 10px", border: "1px solid #d9d9d9", borderRadius: "10px", backgroundColor: "#f7f7f7", display: "flex", flexDirection: "column",
      }}>
        <Box>
          <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px" }}>Production Rate</Typography>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 3, sm: 8, md: 12 }} sx={{ display: "flex", padding: "30px 0px 0px 0px" }}>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ display: "flex", flexDirection: "column", marginTop: "auto", marginRight: "auto" }}>
              <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Current Rate</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>{data?.[0]?.current_rate}</Typography>
            </Grid>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ marginTop: "-28px" }}>
              <DoghnutChart graphdata={data?.[0]} />
            </Grid>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ display: "flex", flexDirection: "column", marginTop: "auto", marginLeft: "auto" }}>
              <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Target Rate</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>{data?.[0]?.target_rate}</Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Wrapper>
  );
};

export default ProductionRate;
