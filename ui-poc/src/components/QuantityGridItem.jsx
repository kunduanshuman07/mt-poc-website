import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';

const QuantityGridItem = ({title, quantity}) => {
    return (
        <Grid size={{ xs: 4, sm: 8, md: 4 }} sx={{ marginTop: "5px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "0px auto" }}>
                <Box sx={{ display: "flex", margin: "auto" }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#2c4c73", textAlign: "center" }}>{quantity}</Typography>
                    <Box sx={{ width: "8px", height: "8px", background: title==='Actual Quantity'?'#12bef6': title==='Expected Quantity'?'#1d3254':'#d3d3d3', margin: "auto 5px" }} />
                  </Box>
                <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>{title}</Typography>
            </Box>
        </Grid>
    )
}

export default QuantityGridItem