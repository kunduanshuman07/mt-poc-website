import express from "express"
import { fetchKeyPerformance } from "../controllers/key_performance.controller.js"

const router = express.Router()

router.get('/fetch-key-performance', fetchKeyPerformance);
// router.get('/fetch-key-performance-yesterday', fetchKeyPerformanceYesterday);
// router.get('/fetch-key-performance-previous_week', fetchKeyPerformancePreviousWeek);
// router.get('/fetch-key-performance-previous_month', fetchKeyPerformancePreviousMonth);
// router.get('/fetch-key-performance-previous_quarter', fetchKeyPerformancePreviousQuarter);

export default router;