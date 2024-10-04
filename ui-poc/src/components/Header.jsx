import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <div style={{ display: "flex" }}>
            <Box sx={{width: "19vw", padding: "10px"}}>
                <Typography sx={{ color: "#12bfe6", textAlign: "center", fontSize: "14px", fontWeight: "bold" }}>Company Logo</Typography>
            </Box>
            <Box sx={{width: "81vw", padding: "10px", backgroundColor: "#1d3254"}}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>Overall Equipment Effectiveness Dashboard</Typography>
            </Box>
        </div>
    )
}

export default Header