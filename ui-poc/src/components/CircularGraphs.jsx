import React from 'react'
import { Box, Typography } from '@mui/material';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularGraphs = ({ type, percentage, category }) => {
    return (
        <div style={{border: "2px solid #d9d9d9", borderRadius: "100px", padding: "5px", boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.15)'}}>
            <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={type === 1 ? 14 : 16}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `#1d3254`,
                    textColor: '#f88',
                    trailColor: '#12bfe6',
                    backgroundColor: '',
                })}
            >
                <Box sx={{}}>
                    <Typography sx={{ fontWeight: "900", fontSize: type === 1 ? "12px" : "28px" }}>{percentage}%</Typography>
                    <Typography sx={{ fontSize: type === 1 ? "10px" : "18px", textAlign: "center" }}>{category}</Typography>
                </Box>
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default CircularGraphs