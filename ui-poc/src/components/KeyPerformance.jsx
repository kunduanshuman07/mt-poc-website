import React from 'react'
import CircularGraphs from './CircularGraphs'
import { Box, LinearProgress, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';

const KeyPerformance = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ border: "1px solid #d9d9d9", padding: "5px", borderRadius: "10px", backgroundColor: "#f7f7f7", display: "flex" }}>
            <Grid size={{ xs: 1, sm: 8, md: 3 }} sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", marginBottom: "auto" }}>Key Performance Indicators</Typography>
                <Box sx={{ background: "white", padding: "10px", border: "1px solid #d9d9d9", borderRadius: "8px" }}>
                    <CircularGraphs type={2} percentage={65} category={"OEE"} />
                </Box>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 9 }}>
                <Grid container spacing={{ xs: 2, md: 2.5 }} columns={{ xs: 1.5, sm: 8, md: 12 }} sx={{ display: "flex", margin: "10px" }}>
                    <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ margin: "auto" }}>
                        <Box sx={{ padding: "0px 40px" }}>
                            <CircularGraphs type={1} percentage={89} category={"AVA"} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ margin: "auto" }}>
                        <Box sx={{ padding: "0px 40px" }}>
                            <CircularGraphs type={1} percentage={79} category={"EFF"} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{ margin: "auto" }}>
                        <Box sx={{ padding: "0px 40px" }}>
                            <CircularGraphs type={1} percentage={93} category={"QUA"} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginTop: "10px", padding: "4px 20px" }}>
                    <Grid size={{ xs: 4, sm: 8, md: 12 }}>
                        <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px" }}>Product Quantity</Typography>
                        <LinearProgress value={80} variant='determinate' sx={{ height: "10px", borderRadius: "1px", marginTop: "5px" }} />
                    </Grid>
                    <Grid size={{ xs: 4, sm: 8, md: 4 }} sx={{ marginTop: "10px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>9448</Typography>
                            <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Actual Quantity</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 4, sm: 8, md: 4 }} sx={{ marginTop: "10px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", margin: "0px auto" }}>
                            <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>8685</Typography>
                            <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Expected Quantity</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 4, sm: 8, md: 4 }} sx={{ marginTop: "10px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>27000</Typography>
                            <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>Target Quantity</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default KeyPerformance