import { Box, MenuItem, TextField, Typography, } from '@mui/material'
import React from 'react'
import { useFilter } from "../context/FilterProvider"

const HeaderTextField = ({ title, selectionData, type, defaultValue }) => {
    const { startDateFilter, endDateFilter, setStartDateFilter, setEndDateFilter, setDeviceFilter, setViewFilter } = useFilter();
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='h6' style={{ fontSize: "10px", fontWeight: "bold", color: "#1d3254" }}>{title}</Typography>
                {type === 1 ?
                    <TextField
                        type='text'
                        size='small'
                        fullWidth={false}
                        select
                        defaultValue={defaultValue}
                        onChange={(e) => title === "Select View" ? setViewFilter(e.target.value): setDeviceFilter(e.target.value)}
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '24px',
                                paddingTop: '4px',
                                paddingBottom: '4px',
                                fontSize: "12px"
                            },
                        }}
                    >
                        {selectionData?.map((option) => (
                            <MenuItem key={option.value} value={option.value} sx={{fontSize: "12px"}}>
                                {option.value}
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
                                height: '24px',
                                paddingTop: '4px',
                                paddingBottom: '4px',
                                fontSize: "12px"
                            },

                        }}
                    />
                }
            </Box>
        </div>
    )
}

export default HeaderTextField