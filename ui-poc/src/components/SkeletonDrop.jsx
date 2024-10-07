import { Box, CircularProgress, Skeleton, Typography } from '@mui/material'
import React from 'react'

const SkeletonDrop = ({ height, title, error, noData, loading }) => {
    return (
        (!loading && !error && noData) ?
            <Box sx={{
                width: "100%",
                height: { height },
                textAlign: "center",
                fontSize: "20px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px solid #d9d9d9",
                borderRadius: "8px"
            }
            } >
                <Typography
                    variant="body2"
                    sx={{ visibility: "visible", fontSize: "14px", opacity: 0.5, fontWeight: 400 }}
                >
                    {title}
                </Typography>
            </Box > :

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
                sx={{bgcolor: 'grey.200'}}
            >
                <Typography
                    variant="body2"
                    sx={{ visibility: "visible", fontSize: "14px", opacity: 0.55, fontWeight: 400 }}
                >
                    {title}
                    {!error && <CircularProgress size={12} sx={{ marginLeft: "10px" }} color='inherit' disableShrink />}
                </Typography>
            </Skeleton>
    )
}

export default SkeletonDrop