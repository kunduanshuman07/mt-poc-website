import express from "express"
import { fetchTimeTemp } from "../controllers/time_temp.controller.js"

const router = express.Router()

router.get('/fetch-time-temp', fetchTimeTemp);

export default router;