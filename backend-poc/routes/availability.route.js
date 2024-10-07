import express from "express"
import { fetchAvailability } from "../controllers/availability.controller.js"

const router = express.Router()

router.get('/fetch-avail', fetchAvailability);

export default router;