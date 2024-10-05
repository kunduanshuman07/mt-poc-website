import Grid from '@mui/material/Grid2';
import React from 'react';
import ProductionRate from '../grids/ProductionRate';
import Availability from '../grids/Availability';
import KeyPerformance from '../grids/KeyPerformance';

const MiddleContent = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "0px 10px" }}>
            <Grid size={{ xs: 4, sm: 8, md: 8 }}>
                <KeyPerformance />
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid size={{ xs: 4, sm: 8, md: 12 }}>
                        <ProductionRate />
                    </Grid>
                    <Grid size={{ xs: 4, sm: 8, md: 12 }}>
                        <Availability />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MiddleContent;
