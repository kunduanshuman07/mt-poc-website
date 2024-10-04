import { query } from "express";
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