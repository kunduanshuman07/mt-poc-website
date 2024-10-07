import express from "express"
import { fetchTimeAccounts } from "../controllers/time_accounts.controller.js"

const router = express.Router()

router.get('/fetch-time-accounts', fetchTimeAccounts);

export default router;