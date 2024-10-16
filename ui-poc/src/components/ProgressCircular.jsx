import { Box, IconButton, Typography } from '@mui/material';
import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProgressCircular = ({ percentage, category, type }) => {
    return <div style={{ borderRadius: "100px", padding: "5px", boxShadow: type === 1 ? '' : '0 0 5px #176084, 0 0 10px #176084, 0 0 5px #176084, 0 0 10px #176084' }}>
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={type === 1 ? 12 : 16}
            styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 0.5,
                trailColor: type === 2 ? `#ea7132` : '#f5ae9a',
                textColor: '#f88',
                pathColor: type === 2 ? '#176084' : '#8d9fb3',
                backgroundColor: '',
            })}
        >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: "900", fontSize: type === 1 ? "12px" : "28px", margin: "0px auto" }}>{percentage}%</Typography>
                <Box sx={{ display: "flex", marginTop: "2px" }}>
                    <Typography sx={{ fontSize: type === 1 ? "10px" : "18px", textAlign: "center", fontWeight: "bold" }}>{category}</Typography>
                    {type === 1 ?
                        <IconButton sx={{ width: "0px", height: "0px", margin: "auto 0px", marginLeft: "10px" }} size='small'>
                            <ArrowDropUpIcon sx={{ fontSize: type === 1 ? "30px" : "50px", color: "green" }} />
                        </IconButton> :
                        <IconButton sx={{ width: "0px", height: "0px", margin: "auto 0px", marginLeft: "10px" }} size='small'>
                            <ArrowDropDownIcon sx={{ fontSize: type === 1 ? "30px" : "50px", color: "red" }} />
                        </IconButton>
                    }
                </Box>
            </Box>
        </CircularProgressbarWithChildren>
    </div>
}

export default ProgressCircular