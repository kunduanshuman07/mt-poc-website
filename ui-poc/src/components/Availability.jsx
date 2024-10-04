import { Box, Typography } from '@mui/material'
import React from 'react'

const Availability = () => {
  return (
    <div style={{ padding: "10px", border: "1px solid #d9d9d9", borderRadius: "10px", display: "flex", flexDirection: "column", backgroundColor: "#f7f7f7" }}>
      <Box sx={{ display: "flex", margin: "auto 10px" }}>
        <Typography sx={{ fontWeight: "700", width: "150px", fontSize: "12px", color: "#1d3254" }}>Availability Loss</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
          <Typography sx={{ fontWeight: "700", color: "#12bfe6", fontSize: "12px" }}>US 01:25:08 / US 01:25:08</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", margin: "auto 10px" }}>
        <Typography sx={{ fontWeight: "700", width: "150px", fontSize: "12px", color: "#1d3254" }}>Production Loss</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
          <Typography sx={{ fontWeight: "700", color: "#12bfe6", fontSize: "12px" }}>US 01:25:08 / US 01:25:08</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", margin: "auto 10px" }}>
        <Typography sx={{ fontWeight: "700", width: "150px", fontSize: "12px", color: "#1d3254" }}>Quality Loss</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
          <Typography sx={{ fontWeight: "700", color: "#12bfe6", fontSize: "12px" }}>US 01:25:08 / US 01:25:08</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Availability