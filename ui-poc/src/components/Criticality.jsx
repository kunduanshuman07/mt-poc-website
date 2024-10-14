import { Button, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import Grid from "@mui/material/Grid2"

const Criticality = ({ title, valueString, value, compare, color }) => {
    const colorStrings = {
        "success": { string: "Healthy", color: "" },
        "warning": { string: "Degradation Starts", color: "" },
        "error": { string: "Critical", color: "#c90e1e" }
    }
    const boxShadowStyles = {
        success: '0 0 5px rgba(18, 191, 54, 0.5)',
        warning: '0 0 5px rgba(255, 152, 0, 0.5)',
        error: '0 0 5px rgba(201, 14, 30, 0.5)',
    };
    return (

        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "5px", borderRadius: "10px", margin: "10px", boxShadow: boxShadowStyles[color] }}>
            <Grid size={{ xs: 1, sm: 8, md: 3 }} sx={{ display: "flex" }}>
                <Button size='small' sx={{ textTransform: "none", color: "#1d3254", fontSize: "10px", width: "100%", padding: "5px", fontWeight: "bold", margin: "auto 0px" }}>{title}</Button>
            </Grid>
            <Grid size={{ xs: 2, sm: 8, md: 6 }} sx={{ display: "flex" }}>
                <Button sx={{ display: "flex", flexDirection: "column", margin: "auto", textTransform: "none", width: "100%" }} size='small'>
                    <LinearProgress sx={{ width: "100%", height: "12px", borderRadius: "2px", cursor: "pointer", }} variant='determinate' value={value * 100 / compare} color={color} />
                    <Typography sx={{ textAlign: "center", fontSize: "10px", fontWeight: "bold", marginTop: "2px" }} color={color}>{colorStrings[color]["string"]}</Typography>
                </Button>
            </Grid>
            <Grid size={{ xs: 1, sm: 8, md: 3 }} sx={{display: "flex"}}>
                <Button sx={{ fontSize: "10px", textTransform: "none", padding: "5px", fontWeight: "bold", width: "100%", margin: "auto" }} size='small' color={color}>{valueString}</Button>
            </Grid>
        </Grid>
    )
}

export default Criticality

