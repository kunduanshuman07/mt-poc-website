import { Box, Radio, Typography } from '@mui/material'
import React from 'react'
import { useFilter } from '../context/FilterProvider'

const ViewSelector = () => {
    const { viewFilter, setViewFilter} = useFilter();
    const handleChange = (e) => {
        setViewFilter(e.target.value)
    }
    return (
        <Box sx={{ display: 'flex'}}>
            <Typography sx={{ margin: "auto 0px", color: "#1d3254", fontWeight: "bold", fontSize: "12px" }}>Select View : </Typography>
            <Radio
                size='small'
                value="today"
                checked={viewFilter === 'today'}
                onChange={handleChange}
            />
            <Typography sx={{ fontSize: '10px', margin: 'auto 5px auto 0px' }}>
                Today
            </Typography>
            <Radio
                size='small'
                value="yesterday"
                checked={viewFilter === 'yesterday'}
                onChange={handleChange}
            />
            <Typography sx={{ fontSize: '10px', margin: 'auto 5px auto 0px' }}>
                Yesterday
            </Typography>

            <Radio
                size='small'
                value="previous_week"
                checked={viewFilter === 'previous_week'}
                onChange={handleChange}
            />
            <Typography sx={{ fontSize: '10px', margin: 'auto 5px auto 0px' }}>
                Previous Week
            </Typography>

            <Radio
                size='small'
                value="previous_month"
                checked={viewFilter === 'previous_month'}
                onChange={handleChange}
            />
            <Typography sx={{ fontSize: '10px', margin: 'auto 5px auto 0px' }}>
                Previous Month
            </Typography>

            <Radio
                size='small'
                value="previous_quarter"
                checked={viewFilter === 'previous_quarter'}
                onChange={handleChange}
            />
            <Typography sx={{ fontSize: '10px', margin: 'auto 5px auto 0px' }}>
                Previous Quarter
            </Typography>
        </Box>
    )
}

export default ViewSelector