import { Box, Typography } from '@mui/material'
import React from 'react'

const LossItems = ({title, value}) => {
  return (
    <Box sx={{ display: "flex", margin: "auto 10px" }}>
        <Typography sx={{ fontWeight: "700", width: "150px", fontSize: "12px", color: "#1d3254" }}>{title} Loss</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
          <Typography sx={{ fontWeight: "700", color: "#12bfe6", fontSize: "12px" }}>{value}</Typography>
        </Box>
      </Box>
  )
}

export default LossItems