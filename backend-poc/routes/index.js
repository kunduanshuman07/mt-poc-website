import express from "express"
import timeRelationRoutes from "./time_temp.route.js"
import keyPerformanceRoutes from "./key_performance.route.js"
import productionRateRoutes from "./prod_rate.route.js"
import motorHealthRoutes from "./motor_health.route.js"
import timeAccountsRoutes from "./time_accounts.route.js"
const router = express.Router();

const defaultRoutes = [
    {
        path: "/time-relations",
        route: timeRelationRoutes
    },
    {
        path: "/production-rate",
        route: productionRateRoutes
    },
    {
        path: "/key-performance",
        route: keyPerformanceRoutes
    },
    {
        path: "/time-accounts",
        route: timeAccountsRoutes
    },
    {
        path: "/motor-health",
        route: motorHealthRoutes
    },
]

defaultRoutes.forEach((routes) => {
    router.use(routes.path, routes.route)
})

export default router;