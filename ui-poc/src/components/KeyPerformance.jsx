import React from 'react'
import CircularGraphs from './CircularGraphs'
import { Box, Grid, LinearProgress, Typography } from '@mui/material'

const KeyPerformance = () => {
    return (
        <div style={{ padding: "5px 10px" , border: "1px solid #d9d9d9", borderRadius: "10px", backgroundColor: "#f7f7f7" }}>
            <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px" }}>Key Performance Indicators</Typography>
            <Grid container sx={{ display: "flex", padding: "5px" }} columnSpacing={0}>
                <Grid item md={3} sx={{ backgroundColor: "white", padding: "10px", margin: "auto 0px", border: "1px solid #d9d9d9" }}>
                    <CircularGraphs type={2} percentage={65} category={"OEE"} />
                </Grid>
                <Grid item md={8.5} sx={{ margin: "auto" }}>
                    <Grid container columnSpacing={8}>
                        <Grid item md={3} sx={{marginLeft: "auto"}}>
                            <CircularGraphs type={1} percentage={89} category={"AVA"} />
                        </Grid>
                        <Grid item md={3} sx={{margin: ""}}>
                            <CircularGraphs type={1} percentage={79} category={"EFF"} />
                        </Grid>
                        <Grid item md={3} sx={{marginRight: "auto"}}>
                            <CircularGraphs type={1} percentage={93} category={"QUA"} />
                        </Grid>
                        <Grid item md={12} sx={{ marginTop: "15px", display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "12px" }}>Product Quantity</Typography>
                            <LinearProgress value={80} variant='determinate' sx={{ height: "6px", borderRadius: "5px", marginTop: "5px" }} />
                            <Box sx={{ display: "flex", margin: "20px 0px 0px 0px" }}>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>9448</Typography>
                                    <Typography sx={{ fontSize: "10px", color: "#1d3254" }}>Actual Quantity</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", margin: "0px auto" }}>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>8685</Typography>
                                    <Typography sx={{ fontSize: "10px", color: "#1d3254" }}>Expected Quantity</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>27000</Typography>
                                    <Typography sx={{ fontSize: "10px", color: "#1d3254" }}>Target Quantity</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default KeyPerformance