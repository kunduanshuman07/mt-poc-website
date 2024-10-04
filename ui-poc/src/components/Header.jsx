import { Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const Header = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={{ xs: 4, sm: 8, md: 3 }} sx={{padding: "5px 10px"}}>
                <Typography sx={{ color: "#12bfe6", textAlign: "center", fontSize: "14px", fontWeight: "bold" }}>Company Logo</Typography>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 9 }} sx={{ backgroundColor: "#1d3254", padding: "5px 10px" }}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>Overall Equipment Effectiveness Dashboard</Typography>
            </Grid>
        </Grid>
    )
}

export default Header