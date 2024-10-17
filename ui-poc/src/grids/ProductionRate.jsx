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
    <Wrapper loading={loading} error={error} skeletonHeight={"245px"} skeletonTitle={"Loading Production Rate"} noData={data?.length === 0}>
      <div style={{
        padding: "5px 10px", display: "flex", flexDirection: "column",
      }}>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px" }}>Production Rate</Typography>
          </Box>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 3, sm: 8, md: 12 }} sx={{ display: "flex", paddingBottom: "10px" }}>
            <Grid size={{ xs: 1, sm: 8, md: 4.6 }} sx={{ margin: "auto" }}>
              <DoghnutChart graphdata={data?.[0]} />
            </Grid>
            <Grid size={{ xs: 3, sm: 8, md: 12 }}>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 3, sm: 8, md: 12 }} sx={{ display: "flex" }}>
                <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                  <Typography sx={{ fontSize: "12px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Current Rate</Typography>
                  <Box sx={{ display: "flex", margin: "auto" }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#2c4c73", textAlign: "center" }}>{parseFloat(data?.[0]?.current_rate).toFixed(2)}</Typography>
                    <Box sx={{ width: "8px", height: "8px", background: '#176084', margin: "auto 5px" }} />
                  </Box>
                </Grid>
                <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                  <Typography sx={{ fontSize: "12px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Target Rate</Typography>
                  <Box sx={{ display: "flex", margin: "auto" }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#2c4c73", textAlign: "center" }}>{data?.[0]?.target_rate}</Typography>
                    <Box sx={{ width: "8px", height: "8px", background: '#ea7132', margin: "auto 5px" }} />
                  </Box>
                </Grid>
                <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                  <Typography sx={{ fontSize: "12px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Ideal Rate</Typography>
                  <Box sx={{ display: "flex", margin: "auto" }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#2c4c73", textAlign: "center" }}>100</Typography>
                    <Box sx={{ width: "8px", height: "8px", background: '#d3d3d3', margin: "auto 5px" }} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Wrapper>
  );
};

export default ProductionRate;
