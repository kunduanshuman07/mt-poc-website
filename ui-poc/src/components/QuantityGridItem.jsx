import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';

const QuantityGridItem = ({title, quantity}) => {
    return (
        <Grid size={{ xs: 4, sm: 8, md: 4 }} sx={{ marginTop: "10px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "0px auto" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#12bfe6", textAlign: "center" }}>{quantity}</Typography>
                <Typography sx={{ fontSize: "10px", color: "#1d3254", textAlign: "center", fontWeight: "bold" }}>{title}</Typography>
            </Box>
        </Grid>
    )
}

export default QuantityGridItem