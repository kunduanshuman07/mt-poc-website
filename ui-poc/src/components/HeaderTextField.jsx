import { Box, MenuItem, Radio, TextField, Typography, } from '@mui/material'
import React from 'react'
import { useFilter } from "../context/FilterProvider"

const HeaderTextField = ({ title, selectionData, type, defaultValue, value }) => {
    const { startDateFilter, endDateFilter, setStartDateFilter, setEndDateFilter, viewFilter, setViewFilter } = useFilter();
    const handleChange = (e) => {
        setViewFilter(e.target.value)
    }
    console.log(viewFilter);
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                {type === 1 ?
                    <TextField
                        type='text'
                        size='small'
                        fullWidth={false}
                        placeholder={title}
                        select
                        defaultValue={'Please select'}
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '24px',
                                paddingTop: '4px',
                                paddingBottom: '4px',
                                fontSize: "12px",
                            },
                        }}
                    >
                        <MenuItem value="Please select" sx={{fontSize: "12px"}}>
                            Please select
                        </MenuItem>
                    </TextField> :
                    type === 2 ?
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
                                    fontSize: "12px",
                                },
                                cursor: "pointer"
                            }}
                        /> :
                        <Box sx={{ display: 'flex', margin: "auto" }}>
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
                }
            </Box>
        </div>
    )
}

export default HeaderTextField