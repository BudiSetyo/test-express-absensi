const express = require('express')
const controller = require('../../controllers/users')
const middleware = require('../../middleware/auth')

const router = express.Router()

router.post(
    '/',
    middleware.authentication,
    middleware.otorization,
    controller.addUser
)

router.get(
    '/',
    middleware.authentication,
    middleware.otorization,
    controller.getAlluser
)
router.get('/detail', middleware.authentication, controller.getUserByNik)

router.patch('/', middleware.authentication, controller.deleteUserById)

router.delete(
    '/',
    middleware.authentication,
    middleware.otorization,
    controller.deleteUserById
)

module.exports = router
