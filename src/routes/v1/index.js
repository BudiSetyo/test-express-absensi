const express = require('express')
const authRoute = require('./auth')
const usersRoute = require('./users')
const historyRoute = require('./history')

const router = express.Router()

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/users',
        route: usersRoute,
    },
    {
        path: '/history',
        route: historyRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
