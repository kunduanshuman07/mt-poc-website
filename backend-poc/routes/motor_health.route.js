import express from "express"
import { fetchMotorHealth } from "../controllers/motor_health.controller.js"

const router = express.Router()

router.get('/fetch-motor-health', fetchMotorHealth);

export default router;