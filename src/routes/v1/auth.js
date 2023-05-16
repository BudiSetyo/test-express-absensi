const express = require('express')
const controller = require('../../controllers/auth')
const middleware = require('../../middleware/auth')

const router = express.Router()

router.post('/', controller.login)
router.get('/', middleware.checkToken)

module.exports = router
