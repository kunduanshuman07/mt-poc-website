import { Box, MenuItem, TextField, Typography, } from '@mui/material'
import React from 'react'
import { useFilter } from "../context/FilterProvider"

const HeaderTextField = ({ title, selectionData, type }) => {
    const { startDateFilter, endDateFilter, setStartDateFilter, setEndDateFilter, setViewFilter, setUnitFilter, setAreaFilter } = useFilter();
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='h6' style={{ fontSize: "12px", fontWeight: "bold", color: "#1d3254" }}>{title}</Typography>
                {type === 1 ?
                    <TextField
                        type='text'
                        size='small'
                        fullWidth={false}
                        select
                        defaultValue="EUR"
                        onChange={(e) => title === "Select Area" ? setAreaFilter(e.target.value) : title === "Select Unit" ? setUnitFilter(e.target.value) : setViewFilter(e.target.value)}
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '30px',
                                paddingTop: '4px', 
                                paddingBottom: '4px',
                            },
                        }}
                    >
                        {selectionData?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField> :
                    <TextField
                        type='datetime-local'
                        size='small'
                        fullWidth={false}
                        value={title === "Start Time" ? startDateFilter : endDateFilter}
                        onChange={(e) => title === "Start Time" ? setStartDateFilter(e.target.value) : setEndDateFilter(e.target.value)}
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '30px',
                                paddingTop: '4px', 
                                paddingBottom: '4px',
                            },
                            
                        }}
                    />
                }
            </Box>
        </div>
    )
}

export default HeaderTextField