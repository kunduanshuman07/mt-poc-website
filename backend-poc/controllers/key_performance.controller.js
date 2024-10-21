import db from "../config/connectDb.js"


export const fetchKeyPerformance = async (req, res) => {
    try {
        db.query('SELECT (SUM(current) / (COUNT(*) * 100)) * 100 AS availability, (SUM(current) / (120 * COUNT(*))) * 100 AS performance, (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) * 100 AS quality, ((SUM(current) / (100 * COUNT(*))) * ((SUM(current) / (120 * COUNT(*))) * (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)))) * 100 AS oee FROM SENSOR_DATA WHERE MEASURE_TIME >= UNIX_TIMESTAMP(NOW() - INTERVAL 1 DAY)', (err, results) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return;
            }
            res.status(200).send(results);
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

export const fetchKeyPerformanceYesterday = async (req, res) => {
    try {
        db.query('SELECT (SUM(current) / (COUNT(*) * 100)) * 100 AS availability, (SUM(current) / (120 * COUNT(*))) * 100 AS performance, (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) * 100 AS quality, ((SUM(current) / (100 * COUNT(*))) * ((SUM(current) / (120 * COUNT(*))) * (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)))) * 100 AS oee FROM SENSOR_DATA WHERE MEASURE_TIME >= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 1 DAY) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 29 SECOND) AND MEASURE_TIME <= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 1 DAY) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 59 SECOND))', (err, results) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return;
            }
            res.status(200).send(results);
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

export const fetchKeyPerformancePreviousWeek = async (req, res) => {
    try {
        db.query('SELECT (SUM(current) / (COUNT(*) * 100)) * 100 AS availability, (SUM(current) / (120 * COUNT(*))) * 100 AS performance, (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) * 100 AS quality, ((SUM(current) / (100 * COUNT(*))) * ((SUM(current) / (120 * COUNT(*))) * (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)))) * 100 AS oee FROM SENSOR_DATA WHERE MEASURE_TIME >= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 7 DAY) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 29 SECOND) AND MEASURE_TIME <= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 7 DAY) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 59 SECOND))', (err, results) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return;
            }
            res.status(200).send(results);
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

export const fetchKeyPerformancePreviousMonth = async (req, res) => {
    try {
        db.query('SELECT (SUM(current) / (COUNT(*) * 100)) * 100 AS availability, (SUM(current) / (120 * COUNT(*))) * 100 AS performance, (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) * 100 AS quality, ((SUM(current) / (100 * COUNT(*))) * ((SUM(current) / (120 * COUNT(*))) * (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)))) * 100 AS oee FROM SENSOR_DATA WHERE MEASURE_TIME >= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 1 MONTH) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 29 SECOND) AND MEASURE_TIME <= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 1 MONTH) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 59 SECOND))', (err, results) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return;
            }
            res.status(200).send(results);
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

export const fetchKeyPerformancePreviousQuarter = async (req, res) => {
    try {
        db.query('SELECT (SUM(current) / (COUNT(*) * 100)) * 100 AS availability, (SUM(current) / (120 * COUNT(*))) * 100 AS performance, (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)) * 100 AS quality, ((SUM(current) / (100 * COUNT(*))) * ((SUM(current) / (120 * COUNT(*))) * (SUM(CASE WHEN current > 0 THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0)))) * 100 AS oee FROM SENSOR_DATA WHERE MEASURE_TIME >= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 3 MONTH) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 29 SECOND) AND MEASURE_TIME <= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 3 MONTH) + INTERVAL 23 HOUR + INTERVAL 59 MINUTE + INTERVAL 59 SECOND))', (err, results) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return;
            }
            res.status(200).send(results);
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}