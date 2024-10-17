import db from "../config/connectDb.js"

export const fetchTimeTemp = async (req, res) => {
    try {
        db.query('SELECT * FROM time_relations', (err, results) => {
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

export const fetchTemperatureStatus = async (req, res) => {
    try {
        const startEpoch = 1729156800;
        const subtractValue = startEpoch - 18000;

        const query = `
            SELECT COALESCE(t1.date_time, t2.date_time, t3.date_time) AS date_time,        t1.zoneA,        t2.zoneB,        t3.zoneC FROM (          SELECT MEASURE_TIME AS date_time, electronic_temperature AS zoneA     FROM SENSOR_DATA_1     WHERE IP = '192.168.0.17'       AND CAST(MEASURE_TIME AS UNSIGNED) >= ${subtractValue} ) t1  LEFT JOIN (     SELECT MEASURE_TIME AS date_time, electronic_temperature AS zoneB     FROM SENSOR_DATA_1     WHERE IP = '192.168.0.16'       AND CAST(MEASURE_TIME AS UNSIGNED) >= ${subtractValue} ) t2 ON t1.date_time = t2.date_time
 LEFT JOIN (     SELECT MEASURE_TIME AS date_time, temperature_transmitter AS zoneC     FROM SENSOR_DATA_1     WHERE IP = '192.168.0.16'       AND CAST(MEASURE_TIME AS UNSIGNED) >= ${subtractValue} ) t3 ON t1.date_time = t3.date_time  UNION  SELECT COALESCE(t1.date_time, t2.date_time, t3.date_time) AS date_time,        t1.zoneA,        t2.zoneB,        t3.zoneC FROM (
         SELECT MEASURE_TIME AS date_time, electronic_temperature AS zoneA     FROM SENSOR_DATA_1     WHERE IP = '192.168.0.17'       AND CAST(MEASURE_TIME AS UNSIGNED) >= ${subtractValue} ) t1 RIGHT JOIN (     SELECT MEASURE_TIME AS date_time, electronic_temperature AS zoneB     FROM SENSOR_DATA_1     WHERE IP = '192.168.0.16'       AND CAST(MEASURE_TIME AS UNSIGNED) >= ${subtractValue} ) t2 ON t1.date_time = t2.date_time  LEFT JOIN (     SELECT MEASURE_TIME AS date_time, temperature_transmitter AS zoneC     FROM SENSOR_DATA_1     WHERE IP = '192.168.0.16'       AND CAST(MEASURE_TIME AS UNSIGNED) >= ${subtractValue} ) t3 ON t2.date_time = t3.date_time; `;

        db.query(query, (err, results) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return res.status(500).send('Internal Server Error');
            }
            res.status(200).send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}


export const fetchTemperatureHealth = async (req, res) => {
    try {
        const query = `
            SELECT 
                a.date_time, 
                a.zoneA, 
                a.Status, 
                b.zoneB, 
                b.Status AS zoneB_Status, 
                c.zoneC, 
                c.Status AS zoneC_Status 
            FROM 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    electronic_temperature AS zoneA, 
                    CASE 
                        WHEN electronic_temperature < 45 OR electronic_temperature > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.17' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS a 
            LEFT JOIN 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    electronic_temperature AS zoneB, 
                    CASE 
                        WHEN electronic_temperature < 45 OR electronic_temperature > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.16' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS b 
            ON 
                a.date_time = b.date_time 
            LEFT JOIN 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    temperature_transmitter AS zoneC, 
                    CASE 
                        WHEN temperature_transmitter < 45 OR temperature_transmitter > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.16' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS c 
            ON 
                a.date_time = c.date_time 
            UNION 
            SELECT 
                b.date_time, 
                a.zoneA, 
                a.Status AS zoneA_Status, 
                b.zoneB, 
                b.Status, 
                c.zoneC, 
                c.Status AS zoneC_Status 
            FROM 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    electronic_temperature AS zoneA, 
                    CASE 
                        WHEN electronic_temperature < 45 OR electronic_temperature > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.17' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS a 
            RIGHT JOIN 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    electronic_temperature AS zoneB, 
                    CASE 
                        WHEN electronic_temperature < 45 OR electronic_temperature > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.16' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS b 
            ON 
                a.date_time = b.date_time 
            LEFT JOIN 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    temperature_transmitter AS zoneC, 
                    CASE 
                        WHEN temperature_transmitter < 45 OR temperature_transmitter > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.16' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS c 
            ON 
                b.date_time = c.date_time 
            UNION 
            SELECT 
                c.date_time, 
                a.zoneA, 
                a.Status AS zoneA_Status, 
                b.zoneB, 
                b.Status AS zoneB_Status, 
                c.zoneC, 
                c.Status 
            FROM 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    electronic_temperature AS zoneA, 
                    CASE 
                        WHEN electronic_temperature < 45 OR electronic_temperature > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.17' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS a 
            LEFT JOIN 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    electronic_temperature AS zoneB, 
                    CASE 
                        WHEN electronic_temperature < 45 OR electronic_temperature > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.16' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS b 
            ON 
                a.date_time = b.date_time 
            RIGHT JOIN 
                (SELECT 
                    MEASURE_TIME AS date_time, 
                    temperature_transmitter AS zoneC, 
                    CASE 
                        WHEN temperature_transmitter < 45 OR temperature_transmitter > 60 THEN 'Critical' 
                        ELSE 'Healthy' 
                    END AS Status 
                 FROM 
                    SENSOR_DATA_1 
                 WHERE 
                    IP = '192.168.0.16' 
                    AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000) AS c 
            ON 
                a.date_time = c.date_time 
            ORDER BY 
                date_time DESC;
        `;

        db.query(query, (err, results) => {
            if (err) {
                console.error('Error executing query: ', err.message);
                return res.status(500).send('Internal Server Error');
            }
            res.status(200).send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

