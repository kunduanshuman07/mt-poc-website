import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

const TimeAccountBox = ({ title, value, progress, bgc }) => {
    return (
        <Box sx={{ display: "flex", height: title === "Total" ? "40px" : "30px", borderTop: title === "Total" ? "1px solid #d9d9d9" : "" }}>
            <Typography sx={{ fontWeight: title === "Total" ? 600 : 300, width: "100px", margin: "auto 0px", fontSize: "12px", color: "#1d3254" }}>{title}</Typography>
            <Typography sx={{ width: "50px", margin: "auto auto", fontSize: "10px", color: " #12bfe6", fontWeight: "bold" }}>{value}</Typography>
            <LinearProgress sx={{ width: "120px", height: "10px", margin: "auto 0px", background: "white" }} value={progress} variant='determinate' color={bgc} />
        </Box>
    )
}

export default TimeAccountBox