import { Box, IconButton, Typography } from '@mui/material';
import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ProgressCircular = ({ percentage, category, type }) => {
    return <div style={{ borderRadius: "100px", padding: "5px", boxShadow: type === 1 ? '' : '0 0 5px #12bfe6, 0 0 10px #00f9ff, 0 0 5px #12bfe6, 0 0 10px #00f9ff' }}>
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={type === 1 ? 12 : 16}
            styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 0.5,
                pathColor: `#1d3254`,
                textColor: '#f88',
                trailColor: '#12bfe6',
                backgroundColor: '',
            })}
        >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: "900", fontSize: type === 1 ? "12px" : "28px", margin: "0px auto" }}>{percentage}%</Typography>
                <Box sx={{ display: "flex", marginTop: "2px" }}>
                    <Typography sx={{ fontSize: type === 1 ? "10px" : "18px", textAlign: "center", fontWeight: "bold" }}>{category}</Typography>
                    <IconButton sx={{ width: "0px", height: "0px", margin: "auto 0px", marginLeft: "10px" }} size='small'>
                        <ArrowDropUpIcon sx={{ fontSize: type === 1 ? "30px" : "50px", color: type===1?"green": "red" }} />
                    </IconButton>
                </Box>
            </Box>
        </CircularProgressbarWithChildren>
    </div>
}

export default ProgressCircular