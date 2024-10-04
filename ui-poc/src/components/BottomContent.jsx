import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TimeAccount from './TimeAccount'
import CombChart from './CombChart'
import axios from "axios";
import { useFilter } from "../context/FilterProvider"

const BottomContent = () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { startDateFilter, endDateFilter } = useFilter();
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
            const filteredData = startDate
                ? data.filter(item => {
                    const [day, month, year] = item.time_stamp.split(" ")[0].split("-");
                    const formattedDate = new Date(`${year}-${month}-${day}`);
                    const afterStartDate = !startDate || formattedDate >= startDate;
                    const beforeEndDate = !endDate || formattedDate <= endDate;
                    return afterStartDate && beforeEndDate;

                    // use this when time is incouded in datetimefilters
                    // const timePart = item.time_stamp.split(" ")[1];
                    // const formattedDate = new Date(`${year}-${month}-${day}T${timePart}`);
                })
                : data;

            setTimeStamps(filteredData.map(item => item.time_stamp.split(" ")[1]));
            setTemperatures(filteredData.map(item => parseFloat(item.temperature)));
            setSensor(filteredData.map(item => item.sensor));
            setOther(filteredData.map(item => item.other));
        };
        fetchTimeTempData();
    }, [startDateFilter, endDateFilter])

    return (
        <Grid container columnSpacing={1} sx={{ padding: "0px 10px", display: "flex" }}>
            <Grid item md={3.8}>
                <TimeAccount />
            </Grid>
            <Grid item md={8.1} sx={{ marginLeft: "auto", marginTop: "0px" }}>
                <CombChart time_stamp={timeStamps} temperature={temperatures} sensor={sensor} other={other} />
            </Grid>
        </Grid>
    )
}

export default BottomContent