import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react'
import TimeAccount from '../grids/TimeAccount'
import CombChart from '../grids/CombChart'
import axios from "axios";
import { useFilter } from "../context/FilterProvider"

const BottomContent = () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { startDateFilter, endDateFilter, viewFilter, unitFilter, areaFilter } = useFilter();
    console.log(viewFilter, unitFilter, areaFilter)
    const [timeStamps, setTimeStamps] = useState([]);
    const [temperatures, setTemperatures] = useState([]);
    const [sensor, setSensor] = useState([])
    const [other, setOther] = useState([])
    useEffect(() => {
        const fetchTimeTempData = async () => {
            const res = await axios.get(`${BASE_URL}/time-temp/fetch-time-temp`);
            const data = res?.data || [];
            const startDate = startDateFilter ? new Date(startDateFilter) : null;
            const endDate = endDateFilter ? new Date(endDateFilter) : null;
            const filteredData = data.filter(item => {
                const [day, month, year] = item.time_stamp.split(" ")[0].split("-");
                const timePart = item.time_stamp.split(" ")[1];
                const formattedDate = new Date(`${year}-${month}-${day}T${timePart}`);
                const afterStartDate = !startDate || formattedDate >= startDate;
                const beforeEndDate = !endDate || formattedDate <= endDate;
                return afterStartDate && beforeEndDate;
            });
            

            setTimeStamps(filteredData.map(item => item.time_stamp.split(" ")[1]));
            setTemperatures(filteredData.map(item => parseFloat(item.temperature)));
            setSensor(filteredData.map(item => item.sensor));
            setOther(filteredData.map(item => item.other));
        };
        fetchTimeTempData();
    }, [startDateFilter, endDateFilter])

    return (
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "0px 10px", marginTop: "10px" }}>
            <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                <TimeAccount />
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 8 }} >
                <CombChart time_stamp={timeStamps} temperature={temperatures} sensor={sensor} other={other} />
            </Grid>
        </Grid>
    )
}

export default BottomContent