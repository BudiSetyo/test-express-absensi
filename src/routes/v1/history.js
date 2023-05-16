const express = require('express')
const controller = require('../../controllers/history')
const middleware = require('../../middleware/auth')

const router = express.Router()

router.post('/', middleware.authentication, controller.addHistory)

router.patch('/', middleware.authentication, controller.updateHistoryById)

router.get('/', middleware.authentication, controller.getAllHistoryUser)

module.exports = router
