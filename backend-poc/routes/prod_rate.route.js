import express from "express"
import {fetchProdRateValues} from "../controllers/prod_rate.controller.js"

const router = express.Router()

router.get('/fetch-prod-rate', fetchProdRateValues);

export default router;