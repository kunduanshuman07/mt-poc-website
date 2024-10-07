import express from "express"
import { fetchKeyPerformance } from "../controllers/key_performance.controller.js"

const router = express.Router()

router.get('/fetch-key-performance', fetchKeyPerformance);

export default router;