import { Box, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFilter } from "../context/FilterProvider"

const HeaderTextField = ({ title, selectionData, selected, type }) => {
    const { startDateFilter, endDateFilter, setStartDateFilter, setEndDateFilter } = useFilter();
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column"}}>
                <Typography variant='h6' style={{ fontSize: "12px", fontWeight: "bold", color: "#1d3254" }}>{title}</Typography>
                {type === 1 ?
                    <TextField
                        sx={{
                            marginTop: "5px",
                            ".css-1sh6wjw-MuiInputBase-input-MuiOutlinedInput-input": {
                                height: "1.0em"
                            },
                            ".css-j882ge-MuiInputBase-root-MuiOutlinedInput-root": {
                                borderRadius: "5px",
                                width: "19vw"
                            },
                            ".css-bgvwm1-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
                                height: "10px",
                                minHeight: "0em"
                            }
                        }}
                        type='text'
                        size='small'
                        fullWidth={false}
                        select
                        value={selected}
                    >
                        {selectionData?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField> :
                    <TextField
                        sx={{
                            marginTop: "5px",
                            ".css-1sh6wjw-MuiInputBase-input-MuiOutlinedInput-input": {
                                height: "1.0em"
                            },
                            ".css-j882ge-MuiInputBase-root-MuiOutlinedInput-root": {
                                borderRadius: "5px",
                                height: "27px",
                                width: "19vw"
                            },
                        }}
                        type='date'
                        size='small'
                        fullWidth={false}
                        value={title === "Start Time" ? startDateFilter : endDateFilter}
                        onChange={(e) => title === "Start Time" ? setStartDateFilter(e.target.value) : setEndDateFilter(e.target.value)}
                    />
                }
            </Box>
        </div>
    )
}

export default HeaderTextField