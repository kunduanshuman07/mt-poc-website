import db from "../config/connectDb.js"


export const fetchProdRateValues = async(req,res) => {
    try {
        db.query('SELECT AVG(current) AS current_rate, 80 AS ideal_rate, 50 AS target_rate FROM SENSOR_DATA WHERE MEASURE_TIME >= UNIX_TIMESTAMP(NOW() - INTERVAL 1 DAY)', (err, results) => {
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