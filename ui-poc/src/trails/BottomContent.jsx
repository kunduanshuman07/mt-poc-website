import Grid from '@mui/material/Grid2';
import React from 'react'
import TimeAccount from '../grids/TimeAccount'
import CombChart from '../grids/CombChart'
import CompSituation from '../grids/CompSituation';

const BottomContent = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "0px 10px", marginTop: "10px" }}>
            <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                {/* <TimeAccount /> */}
                <CompSituation/>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 8 }} >
                <CombChart />
            </Grid>
        </Grid>
    )
}

export default BottomContent