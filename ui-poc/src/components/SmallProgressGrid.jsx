import React from 'react'
import Grid from '@mui/material/Grid2';
import ProgressCircular from './ProgressCircular';
import { Box } from '@mui/material';

const SmallProgressGrid = ({data}) => {
    return (
        <Grid container spacing={{ xs: 2, md: 2.5 }} columns={{ xs: 1.5, sm: 8, md: 12 }} sx={{ display: "flex", margin: "10px" }}>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{margin: "auto"}}>
                <Box sx={{ padding: "0px 40px",  }}>
                    <ProgressCircular type={1} percentage={parseFloat(data?.availability[0]?.availability).toFixed(1)} category={"AVA"} />
                </Box>
            </Grid>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{margin: "auto"}}>
                <Box sx={{padding: "0px 40px"}}>
                    <ProgressCircular type={1} percentage={data?.key_performance[0]?.eff} category={"EFF"} />
                </Box>
            </Grid>
            <Grid size={{ xs: 1, sm: 8, md: 4 }} sx={{margin: "auto"}}>
                <Box sx={{padding: "0px 40px"}}>
                    <ProgressCircular type={1} percentage={data?.key_performance[0]?.qua} category={"QUA"} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SmallProgressGrid