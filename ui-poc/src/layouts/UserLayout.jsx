import React from 'react'
import Header from '../trails/Header'
import Title from '../trails/Title'
import MiddleContent from '../trails/MiddleContent'
import BottomContent from '../trails/BottomContent'
import { Box, LinearProgress } from '@mui/material'
import { usePulseLoading } from '../context/LoadingProvider'

const UserLayout = () => {
  const { pulseLoading } = usePulseLoading();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title />
      <Header />
      {pulseLoading ?
        <Box sx={{padding: "0px 5px"}}>
          <LinearProgress color='warning'
            sx={{ height: "3px" }} />
        </Box>
        :
        <Box sx={{padding: "0px 5px"}}>
          <LinearProgress sx={{
            height: "3px", '& .MuiLinearProgress-bar': {
              backgroundColor: '#f9f9f9',
            },
          }} variant='determinate' value={100} color='warning' />
        </Box>
      }
      <MiddleContent />
      <BottomContent />
    </div>
  )
}

export default UserLayout