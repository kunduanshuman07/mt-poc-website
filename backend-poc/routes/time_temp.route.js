import express from "express"
import { fetchTemperatureHealth, fetchTemperatureStatus, fetchTimeTemp } from "../controllers/time_temp.controller.js"

const router = express.Router()

router.get('/fetch-time-temp', fetchTimeTemp);
router.get('/fetch-temp-status', fetchTemperatureStatus);
router.get('/fetch-temp-health', fetchTemperatureHealth);

export default router;