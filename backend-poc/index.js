import express, { json } from "express";
import http from "http"
import cors from "cors"
import { config } from "dotenv"
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
config();
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})