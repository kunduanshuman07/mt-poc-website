import { Grid, Box } from '@mui/material';
import React from 'react';
import KeyPerformance from './KeyPerformance';
import ProductionRate from './ProductionRate';
import Availability from './Availability';

const MiddleContent = () => {
    return (
        <Grid container columnSpacing={0} rowSpacing={0} sx={{}}>
            <Grid item xs={8}>
                <Box sx={{ padding: '10px' }}>
                    <KeyPerformance />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Grid container direction="column" rowSpacing={0}>
                    <Grid item md={12}>
                        <Box sx={{ padding: '10px' }}>
                            <ProductionRate />
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box sx={{ padding: '10px' }}>
                            <Availability />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MiddleContent;
