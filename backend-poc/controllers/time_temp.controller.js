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
        db.query('SELECT * FROM temperature_status', (err, results) => {
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

export const fetchTemperatureHealth = async (req, res) => {
    try {
        db.query(`SELECT deviceId, zoneA, zoneB, zoneC, date_time, 
                  IF(zoneA BETWEEN 20 AND 70, 'Healthy', 'Critical') AS zoneA_status, 
                  IF(zoneB BETWEEN 20 AND 70, 'Healthy', 'Critical') AS zoneB_status, 
                  IF(zoneC BETWEEN 20 AND 70, 'Healthy', 'Critical') AS zoneC_status 
                  FROM temperature_status 
                  WHERE date_time BETWEEN '2024-10-11 00:00' AND '2024-10-12 23:59'`,
            (err, results) => {
                if (err) {
                    console.error('Error executing query: ', err.message);
                    res.status(500).send('Server Error');
                    return;
                }
                res.status(200).send(results);
            });
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}
