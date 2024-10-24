import Grid from '@mui/material/Grid2';
import React from 'react';
import ProductionRate from '../grids/ProductionRate';
import KeyPerformance from '../grids/KeyPerformance';
import { Card } from '@mui/material';

const MiddleContent = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "0px 6px" }}>
            <Grid size={{ xs: 4, sm: 8, md: 8 }}>
                <Card sx={{
                    background: "#f8f8f8"
                }}>
                    <KeyPerformance />
                </Card>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid size={{ xs: 4, sm: 8, md: 12 }}>
                        <Card sx={{ background: "#f8f8f8" }}>
                            <ProductionRate />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MiddleContent;
