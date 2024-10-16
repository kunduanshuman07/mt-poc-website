import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import BarChart from '../components/BarChart';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';
import GraphDialog from '../components/GraphDialog';

export default function StackedBarChart() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { data, error, loading } = useFetchData(`${BASE_URL}/time-relations/fetch-temp-health`);
    const [chartOptions, setChartOptions] = React.useState({});
    const [openModal, setOpenModal] = React.useState(false);
    React.useEffect(() => {
        const fetchTemperatureData = async () => {
            if (data) {
                const processZoneData = (zoneStatus) => {
                    const processedData = [];
                    let currentStatus = zoneStatus[0];

                    for (let i = 1; i < zoneStatus.length; i++) {
                        if (zoneStatus[i] !== currentStatus) {
                            processedData.push(data[i - 1].date_time.split(" ")[1]);
                            currentStatus = zoneStatus[i];
                        }
                    }

                    processedData.push(
                        data[zoneStatus.length - 1].date_time.split(" ")[1],
                    );

                    return processedData;
                };

                const zoneA = data.map(d => d.zoneA_status);
                const zoneB = data.map(d => d.zoneB_status);
                const zoneC = data.map(d => d.zoneC_status);

                const zoneAData = processZoneData(zoneA);
                const zoneBData = processZoneData(zoneB);
                const zoneCData = processZoneData(zoneC);

                const maxLength = Math.max(zoneAData.length, zoneBData.length, zoneCData.length);
                const series = [];

                for (let i = 0; i < maxLength; i++) {
                    if (series[i] === undefined) {
                        series[i] = { zoneA: null, zoneB: null, zoneC: null };
                    }
                    series[i].zoneA = zoneAData[i] || null;
                    series[i].zoneB = zoneBData[i] || null;
                    series[i].zoneC = zoneCData[i] || null;
                }

                setChartOptions({
                    series: series.map((s, index) => ({
                        name: `Time Segment ${index + 1}`,
                        data: [s.zoneA, s.zoneB, s.zoneC],
                    })),
                });
            }
        };

        fetchTemperatureData();
    }, [data]);

    return (
        <Wrapper error={error} loading={loading} skeletonHeight={"250px"} skeletonTitle={"Loading Incident Log"} noData={data?.length === 0}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", padding: "8px 8px 0px 8px" }}>
                    <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", textAlign: "left" }}>Incident Log</Typography>
                    <Box sx={{ width: "8px", height: "8px", background: "#176084", margin: "auto 0px auto auto" }} />
                    <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "8px", margin: "auto 5px" }}>Healthy</Typography>
                    <Box sx={{ width: "8px", height: "8px", background: "#ea7132", margin: "auto 5px" }} />
                    <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "8px", margin: "auto 0px" }}>Critical</Typography>
                    <Button size='small' sx={{ textTransform: "none", height: "0px", fontSize: "10px", margin: "auto 0px auto auto", ":hover": { background: "white", color: "#12bfe6" } }} onClick={() => setOpenModal(true)}>Zoom</Button>
                </Box>
                <Box>
                    <BarChart chartOptionsData={chartOptions} height={208} />
                </Box>
            </Box>
            {openModal && <GraphDialog title={'Incident Log'} open={openModal} setOpen={setOpenModal} children={<BarChart height={400} chartOptionsData={chartOptions} />} />}
        </Wrapper>
    );
}
