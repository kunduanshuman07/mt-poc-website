import React from 'react';
import { Box } from '@mui/material';

const GradientProgressBar = ({ actual, expected, target }) => {
    const actualExpectedWidth = (actual / target) * 100;
    const expectedTargetWidth = (expected / target) * 100;
    const actionWidth = actual > expected ? actualExpectedWidth : expectedTargetWidth;
    const targetWidth = 100 - actionWidth;
    const newExpectedWidth = actual > expected ? ((expectedTargetWidth) / (actualExpectedWidth)) * 100 : ((actualExpectedWidth) / (expectedTargetWidth)) * 100;
    return (
        <Box sx={{ width: '100%', display: 'flex', margin: "5px auto 0px auto" }}>
            <Box sx={{ width: actual > expected ? `${actualExpectedWidth}%` : `${expectedTargetWidth}%`, height: "24px", display: "flex", flexDirection: "column" }}>
                <Box
                    sx={{
                        width: actual > expected ? `${newExpectedWidth}%` : "100%",
                        background: 'linear-gradient(90deg, white, #ea7132)',
                        height: "6px",
                    }}
                />
                <Box
                    sx={{
                        width: actual > expected ? "100%" : `${newExpectedWidth}%`,
                        background: '#176084',
                        height: "12px",
                    }}
                />
                <Box
                    sx={{
                        width: actual > expected ? `${newExpectedWidth}%` : "100%",
                        background: 'linear-gradient(90deg, white, #ea7132)',
                        height: "6px",
                    }}
                />
            </Box>
            <Box sx={{ display: "flex", width: `${targetWidth}%` }}>
                <Box
                    sx={{
                        width: "100%",
                        height: "12px",
                        background: '#d3d3d3',
                        margin: "auto 0px",
                    }}
                />
            </Box>
        </Box>
    );
};

export default GradientProgressBar;
