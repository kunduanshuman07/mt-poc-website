import React from 'react'
import Grid from '@mui/material/Grid2';
import ProgressCircular from './ProgressCircular';
import { Box } from '@mui/material';

const SmallProgressGrid = ({data}) => {
    return (
        <Grid container spacing={{ xs: 2, md: 2.5 }} columns={{ xs: 1.5, sm: 8, md: 12 }} sx={{ display: "flex", margin: "10px" }}>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{margin: "auto"}}>
                <Box sx={{ padding: "0px 40px",  }}>
                    <ProgressCircular type={1} percentage={parseFloat(data?.[0]?.availability).toFixed(1)} category={"AVA"} />
                </Box>
            </Grid>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{margin: "auto"}}>
                <Box sx={{padding: "0px 40px"}}>
                    <ProgressCircular type={1} percentage={parseFloat(data?.[0]?.performance).toFixed(1)} category={"PER"} />
                </Box>
            </Grid>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{margin: "auto"}}>
                <Box sx={{padding: "0px 40px"}}>
                    <ProgressCircular type={1} percentage={parseFloat(data?.[0]?.quality).toFixed(1)} category={"QUA"} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SmallProgressGrid