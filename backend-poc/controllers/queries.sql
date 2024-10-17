SELECT MEASURE_TIME AS date_time , electronic_temperature as zoneA, case WHEN electronic_temperature < 45 OR electronic_temperature>60 THEN 'Critical' ELSE 'Healthy' END AS Status FROM SENSOR_DATA_1 where IP='192.168.0.17' AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000 ORDER BY MEASURE_TIME DESC union
SELECT MEASURE_TIME AS date_time , electronic_temperature as zoneB, case WHEN electronic_temperature < 45 OR electronic_temperature>60 THEN 'Critical' ELSE 'Healthy' END AS Status FROM SENSOR_DATA_1 where IP='192.168.0.16' AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000 ORDER BY MEASURE_TIME DESC;
SELECT MEASURE_TIME AS date_time , temperature_transmitter as zoneC, case WHEN electronic_temperature < 45 OR electronic_temperature>60 THEN 'Critical' ELSE 'Healthy' END AS Status FROM SENSOR_DATA_1 where IP='192.168.0.16' AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000 ORDER BY MEASURE_TIME DESC;



-- First Query: Zone A
SELECT 
    a.date_time,
    a.zoneA,
    a.Status,
    b.zoneB,
    b.Status AS zoneB_Status,
    c.zoneC,
    c.Status AS zoneC_Status
FROM 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS a
LEFT JOIN 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS b ON a.date_time = b.date_time
LEFT JOIN 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS c ON a.date_time = c.date_time

UNION

-- Second Query: Zone B
SELECT 
    b.date_time,
    a.zoneA,
    a.Status AS zoneA_Status,
    b.zoneB,
    b.Status,
    c.zoneC,
    c.Status AS zoneC_Status
FROM 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS a
RIGHT JOIN 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS b ON a.date_time = b.date_time
LEFT JOIN 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS c ON b.date_time = c.date_time

UNION

-- Third Query: Zone C
SELECT 
    c.date_time,
    a.zoneA,
    a.Status AS zoneA_Status,
    b.zoneB,
    b.Status AS zoneB_Status,
    c.zoneC,
    c.Status
FROM 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS a
LEFT JOIN 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS b ON a.date_time = b.date_time
RIGHT JOIN 
    (
        SELECT 
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
            AND CAST(MEASURE_TIME AS UNSIGNED) >= 1729156800 - 18000
    ) AS c ON a.date_time = c.date_time

ORDER BY 
    date_time DESC;
