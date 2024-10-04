import express, { json } from "express";
import http from "http"
import cors from "cors"

import db from "./config/connectDb.js"
import router from "./routes/index.js"

const app = express()
const server = http.createServer(app);

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    })
);

app.use(json());
app.use('/poc', router)

server.listen(5000, () => {
    console.log('Server running on port 5000');
})