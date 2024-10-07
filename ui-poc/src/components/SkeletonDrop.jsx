import { CircularProgress, Skeleton, Typography } from '@mui/material'
import React from 'react'

const SkeletonDrop = ({height, title}) => {
    return (
        <Skeleton
            variant="rounded"
            width={"100%"}
            height={height}
            style={{
                textAlign: "center",
                fontSize: "20px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px solid #d9d9d9"
            }}
        >
            <Typography
                variant="body2"
                sx={{ visibility: "visible", fontSize: "14px", opacity: 0.5 }}
            >
                {title}
                {title !== "Error Loading Page" && <CircularProgress size={12} sx={{marginLeft: "10px"}} color='inherit'/>}
            </Typography>
        </Skeleton>
    )
}

export default SkeletonDrop