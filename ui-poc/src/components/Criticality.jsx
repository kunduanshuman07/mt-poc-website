import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

const Criticality = ({title, valueString, value, compare, color}) => {
    return (
        <Box sx={{ display: "flex", margin: "23px 10px" }}>
            <Typography sx={{fontSize: "10px", fontWeight: "bold", width: "20%", margin: "auto auto auto 5px", textAlign: "center"}}>{title}</Typography>
            <LinearProgress sx={{ width: "70%", margin: "auto 10px", height: "30px", borderRadius: "5px", cursor: "pointer" }} variant='determinate' value={value*100/compare} color={color}/>
            <Typography sx={{width: "15%", margin: "auto 5px auto auto", fontSize: "12px", textAlign: "center"}}>{valueString}</Typography>
        </Box>
    )
}

export default Criticality