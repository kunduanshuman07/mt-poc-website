import Grid from '@mui/material/Grid2';
import React from 'react'
import CombChart from '../grids/CombChart'
import CompSituation from '../grids/CompSituation';
import { Card } from '@mui/material';
import StackedBarChart from '../grids/StackedBarChart';

const BottomContent = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "0px 10px", marginTop: "10px" }}>
            <Grid size={{ xs: 4, sm: 8, md: 3 }}>
                <Card sx={{}}>
                    <CompSituation />
                </Card>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 5 }} >
                <Card sx={{}}>
                    <CombChart />
                </Card>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 4 }} >
                <Card sx={{}}>
                    <StackedBarChart />
                </Card>
            </Grid>
        </Grid>
    )
}

export default BottomContent