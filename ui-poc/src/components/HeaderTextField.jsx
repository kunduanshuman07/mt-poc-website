import { MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useFilter } from "../context/FilterProvider"

const HeaderTextField = ({ selectValues, type }) => {
    const { setRefresh, setInterval } = useFilter();
    return (
        <TextField
            type='text'
            size='small'
            fullWidth={false}
            select
            defaultValue={type === 2 ? 30 : 300}
            onChange={(e) => type === 1 ? setInterval(e.target.value) : setRefresh(e.target.value)}
            sx={{
                '& .MuiInputBase-root': {
                    height: '24px',
                    paddingTop: '4px',
                    paddingBottom: '4px',
                    fontSize: "12px",
                    width: "100px"
                },
                margin: "auto 0px"
            }}
        >
            {selectValues?.map((option, index) => (
                <MenuItem value={option.value} sx={{ fontSize: "12px" }} key={index}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default HeaderTextField