import { MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const Title = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ borderBottom: "1px solid #1d3254" }}>
            <Grid size={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "5px 10px", display: "flex" }}>
                <img src='/incedo-logo.svg' alt='Incedo' height={25} style={{ padding: "5px", margin: "auto 5px auto 10px" }} />
                <Typography sx={{ margin: "auto 0px", fontSize: "20px" }}>|</Typography>
                <Typography sx={{ color: "#1d3254", fontSize: "14px", fontWeight: "bold", margin: "auto 10px", padding: "0px" }}>SMART FACTORY - Overall Equipment Effectiveness (OEE) Dashboard</Typography>
                {/* <TextField select type='text'
                    size='small'
                    fullWidth={false}
                    defaultValue={'5m'}
                    sx={{
                        '& .MuiInputBase-root': {
                            height: '24px',
                            paddingTop: '4px',
                            paddingBottom: '4px',
                            fontSize: "12px",
                        },
                        margin: "auto 0px auto auto"
                    }}>
                    <MenuItem sx={{ fontSize: '12px' }} value={"60000"}>
                        {"1m"}
                    </MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value={"120000"}>
                        {"2m"}
                    </MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value={"300000"}>
                        {"5m"}
                    </MenuItem>
                </TextField> */}
            </Grid>
        </Grid>
    )
}

export default Title