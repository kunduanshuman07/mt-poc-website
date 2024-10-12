import * as React from 'react';
import { Box, Typography } from '@mui/material';
import BarChart from '../components/BarChart';
import useFetchData from '../hooks/useFetchData';
import Wrapper from '../components/Wrapper';
import { useFilter } from '../context/FilterProvider';

export default function StackedBarChart() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { data, error, loading } = useFetchData(`${BASE_URL}/time-relations/fetch-temp-health`);
    const { deviceFilter } = useFilter();
    const [chartOptions, setChartOptions] = React.useState({});
    React.useEffect(() => {
        const fetchTemperatureData = async () => {
            const filteredData = data?.filter((d) => d.deviceId === deviceFilter)
            if (filteredData) {
                const processZoneData = (zoneStatus) => {
                    const processedData = [];
                    let currentStatus = zoneStatus[0];

                    for (let i = 1; i < zoneStatus.length; i++) {
                        if (zoneStatus[i] !== currentStatus) {
                            processedData.push(filteredData[i - 1].date_time.split(" ")[1]);
                            currentStatus = zoneStatus[i];
                        }
                    }

                    processedData.push(
                        filteredData[zoneStatus.length - 1].date_time.split(" ")[1],
                    );

                    return processedData;
                };

                const zoneA = filteredData.map(d => d.zoneA_status);
                const zoneB = filteredData.map(d => d.zoneB_status);
                const zoneC = filteredData.map(d => d.zoneC_status);

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
    }, [data, deviceFilter]);

    return (
        <Wrapper error={error} loading={loading} skeletonHeight={"250px"} skeletonTitle={"Loading Time Scale"} noData={data?.length === 0}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", padding: "8px 8px 0px 8px" }}>
                    <Typography sx={{ fontWeight: "600", color: "#1d3254", fontSize: "14px", textAlign: "left" }}>Time Scale</Typography>
                </Box>
                <Box>
                    <BarChart chartOptionsData={chartOptions} />
                </Box>
            </Box>
        </Wrapper>
    );
}
