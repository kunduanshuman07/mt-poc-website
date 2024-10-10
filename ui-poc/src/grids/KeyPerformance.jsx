import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import ProgressCircular from '../components/ProgressCircular';
import SmallProgressGrid from '../components/SmallProgressGrid';
import QuantityGridItem from '../components/QuantityGridItem';
import ThreeStageLinearProgress from '../components/ThreeStageLinearProgress';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';

const KeyPerformance = () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { data, error, loading } = useFetchData(`${BASE_URL}/key-performance/fetch-key-performance`)
    return (
        <Wrapper loading={loading} error={error} skeletonHeight={"245px"} skeletonTitle={"Loading Key Performance Indicators"} noData={data?.length === 0}>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ border: "1px solid #d9d9d9", padding: "5px", borderRadius: "10px", backgroundColor: "#f7f7f7", display: "flex" }}>
                <Grid size={{ xs: 1, sm: 8, md: 3 }} sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                    <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", marginBottom: "15px", textAlign: "center" }}>Key Performance Indicators</Typography>
                    <Box sx={{ background: "white", padding: "10px", border: "1px solid #d9d9d9", borderRadius: "8px", margin: "auto" }}>
                        <ProgressCircular type={2} percentage={parseFloat((data?.availability[0]?.availability * data?.key_performance[0]?.eff * data?.key_performance[0]?.qua) / 10000).toFixed(0)} category={"OEE"} />
                    </Box>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 9 }} sx={{ display: "flex", flexDirection: "column" }}>
                    <SmallProgressGrid data={data} />
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginTop: "0px", padding: "0px 20px" }}>
                        <Grid size={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "12px" }}>Product Quantity</Typography>
                            <ThreeStageLinearProgress actual={data?.key_performance?.[0]?.actual_quantity} expected={data?.key_performance?.[0]?.expected_quantity} target={data?.key_performance?.[0]?.target_quantity} total={data?.key_performance?.[0]?.total_quantity} />
                        </Grid>
                        <QuantityGridItem title={'Actual Quantity'} quantity={data?.key_performance?.[0]?.actual_quantity} />
                        <QuantityGridItem title={'Expected Quantity'} quantity={data?.key_performance?.[0]?.expected_quantity} />
                        <QuantityGridItem title={'Target Quantity'} quantity={data?.key_performance?.[0]?.target_quantity} />
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default KeyPerformance