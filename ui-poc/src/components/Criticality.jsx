import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import Grid from "@mui/material/Grid2"

const Criticality = ({ title, valueString, value, compare, color }) => {
    const colorStrings = {
        "success": { string: "Healthy", color: "" },
        "warning": { string: "Degradation Start", color: "" },
        "error": { string: "Critical", color: "#c90e1e" }
    }
    const boxShadowStyles = {
        success: '0 0 5px rgba(18, 191, 54, 0.8)',
        warning: '0 0 5px rgba(255, 152, 0, 0.8)',
        error: '0 0 5px rgba(201, 14, 30, 0.5)',
    };
    return (
        <Grid container spacing={{ xs: 1, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ borderRadius: "10px", margin: "9px", boxShadow: boxShadowStyles[color], display: "flex" }}>
            <Grid size={{ xs: 1, sm: 8, md: 5 }} sx={{ display: "flex", padding: "5px", backgroundColor: "#f9f9f9", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                <img src={`/assets/${title}.svg`} alt={title} width={20} height={20} style={{ margin: "auto 0px" }} />
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                    <Typography sx={{ textTransform: "none", color: "#1d3254", fontSize: "10px", fontWeight: "bold", margin: "auto 0px" }}>{title}</Typography>
                    <Typography sx={{ fontSize: "12px", textTransform: "none", fontWeight: "bold", margin: "auto 0px" }} color={color}>{valueString}</Typography>
                </Box>
            </Grid>
            <Grid size={{ xs: 2, sm: 8, md: 7 }} sx={{ display: "flex", flexDirection: "column", padding: "7px", margin: "auto" }}>
                <LinearProgress sx={{ height: "12px", borderRadius: "2px", cursor: "pointer", }} variant='determinate' value={value * 100 / compare} color={color} />
                <Typography sx={{ textAlign: "center", fontSize: "12px", fontWeight: "bold", marginTop: "5px" }} color={color}>{colorStrings[color]["string"]}</Typography>
            </Grid>
        </Grid>
    )
}

export default Criticality

