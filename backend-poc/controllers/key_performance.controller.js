import db from "../config/connectDb.js";

export const fetchKeyPerformance = async (req, res) => {
    try {
        const query = (sql) => {
            return new Promise((resolve, reject) => {
                db.query(sql, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                });
            });
        };

        const [key_per_result, avail_result] = await Promise.all([
            query('SELECT * FROM key_performance'),
            query('WITH consecutive_zeros AS (SELECT time, proximity, ROW_NUMBER() OVER (ORDER BY time) AS row_num, ROW_NUMBER() OVER (PARTITION BY proximity ORDER BY time) AS zero_row_num FROM device_data), grouped_zeros AS (SELECT MIN(time) AS start_time, MAX(time) AS end_time, COUNT(*) AS zero_count FROM consecutive_zeros WHERE proximity = 0 GROUP BY (row_num - zero_row_num)), sum_zero_counts AS (SELECT SUM(zero_count) AS total_zero_count FROM grouped_zeros WHERE zero_count >= (SELECT consecutive_zeroes FROM availability_config)) SELECT (1 - (szc.total_zero_count * cfg.step_size) / (cfg.total_time)) * 100 AS availability FROM sum_zero_counts szc CROSS JOIN availability_config cfg')
        ]);

        const finalResult = { key_performance: key_per_result, availability: avail_result };
        res.status(200).send(finalResult);
    } catch (error) {
        console.error('Error fetching data: ', error.message);
        res.status(400).send(error.message);
    }
};
