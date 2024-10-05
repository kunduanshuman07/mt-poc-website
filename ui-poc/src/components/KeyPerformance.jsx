import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import ProgressCircular from './ProgressCircular';
import SmallProgressGrid from './SmallProgressGrid';
import QuantityGridItem from './QuantityGridItem';

const KeyPerformance = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ border: "1px solid #d9d9d9", padding: "5px", borderRadius: "10px", backgroundColor: "#f7f7f7", display: "flex" }}>
            <Grid size={{ xs: 1, sm: 8, md: 3 }} sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", marginBottom: "15px", textAlign: "center" }}>Key Performance Indicators</Typography>
                <Box sx={{ background: "white", padding: "10px", border: "1px solid #d9d9d9", borderRadius: "8px", margin: "auto" }}>
                    <ProgressCircular type={2} percentage={65} category={"OEE"} />
                </Box>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 9 }} sx={{display: "flex", flexDirection: "column"}}>
                <SmallProgressGrid />
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginTop: "5px", padding: "4px 20px" }}>
                    <Grid size={{ xs: 4, sm: 8, md: 12 }}>
                        <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px" }}>Product Quantity</Typography>
                        <LinearProgress value={80} variant='determinate' sx={{ height: "10px", borderRadius: "1px", marginTop: "2px" }} />
                    </Grid>
                    <QuantityGridItem title={'Actual Quantity'} quantity={9448} />
                    <QuantityGridItem title={'Expected Quantity'} quantity={8685} />
                    <QuantityGridItem title={'Target Quantity'} quantity={27000} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default KeyPerformance