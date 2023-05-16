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
router.get('/', controller.getAlluser)
router.get('/detail', controller.getUserByNik)
router.patch('/', controller.deleteUserById)
router.delete('/', controller.deleteUserById)

module.exports = router
