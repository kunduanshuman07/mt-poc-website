import express from "express"
import timeTempRoutes from "./time_temp.route.js"

const router = express.Router();

const defaultRoutes = [
    {
        path: "/time-temp",
        route: timeTempRoutes
    }
]

defaultRoutes.forEach((routes) => {
    router.use(routes.path, routes.route)
})

export default router;