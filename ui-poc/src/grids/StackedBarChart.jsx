import * as React from 'react';
import { Box, Typography } from '@mui/material';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';
import ApexLineChart from '../components/ApexLineChart';

export default function StackedBarChart() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { data, error, loading } = useFetchData(`${BASE_URL}/time-relations/fetch-temp-health`);
    return (
        <Wrapper error={error} loading={loading} skeletonHeight={"250px"} skeletonTitle={"Loading Incident Log"} noData={data?.length === 0}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", padding: "8px 8px 0px 8px" }}>
                    <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", textAlign: "left" }}>Incident Log</Typography>
                    <Box sx={{ width: "8px", height: "8px", background: "#FF4560", margin: "auto 5px", marginLeft: "auto", borderRadius: "50px" }} />
                    <Typography sx={{ fontWeight: "600", color: "#FF4560", fontSize: "12px", margin: "auto 0px"}}>Critical</Typography>
                </Box>
                <Box>
                    <ApexLineChart height={208} />
                </Box>
            </Box>
        </Wrapper>
    );
}
