import db from "../config/connectDb.js"

export const fetchAvailability = async(req,res) => {
    try {
        db.query('SELECT * from availability', (err, results) => {
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