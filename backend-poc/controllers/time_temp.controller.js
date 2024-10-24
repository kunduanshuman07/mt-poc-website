import db from "../config/connectDb.js"

export const fetchTemperatureStatus = async (req, res) => {
    try {
        const interval = req.query.intervalseconds ? req.query.intervalseconds : 300;
        db.query(
            'CALL GetSensorData(?)',
            [interval],
            (err, results) => {
                if (err) {
                    console.error('Error executing stored procedure: Temperature Status ', err.message);
                    return res.status(500).send('Internal Server Error');
                }

                console.log(results);
                res.status(200).send(results[0]);
            }
        );
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

export const fetchTemperatureHealth = async (req, res) => {
    try {
        db.query(`SELECT * FROM SENSOR_DATA LIMIT 1`, (err, results) => {
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

