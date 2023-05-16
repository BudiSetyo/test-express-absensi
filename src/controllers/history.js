const historySchema = require('../schemes/history')
const { response } = require('../utils/response')
const moment = require('moment')

const addHistory = async (req, res) => {
    const data = req.body

    const _data = await historySchema.insertHistory(data)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Insert history failed',
        })
    }

    return response(res, 400, {
        error: false,
        message: 'Insert history success',
    })
}

const updateHistoryById = async (req, res) => {
    const data = req.body
    const { id } = req.query

    const _data = await historySchema.updateHistoryById(data, id)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Update history failed',
        })
    }

    return response(res, 400, {
        error: false,
        message: 'Update history success',
    })
}

const getAllHistoryUser = async (req, res) => {
    const { id } = req.query

    const _data = await historySchema.getAllHistoryUser(id)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all history user failed',
        })
    }

    return response(res, 400, {
        error: false,
        message: 'Get all history user success',
        data: _data.data,
    })
}

const submitAttendance = async (req, res) => {
    const { userId } = req.body

    const timeFormat = 'YYYY-MM-DD HH:mm:ss'
    const timeNow = Date.now()

    const data = {
        userId,
        date: moment(timeNow).format('YYYY-MM-DD'),
        time: moment(moment(timeNow).format(timeFormat)).isAfter(
            moment(timeNow).format('YYYY-MM-DD') + ' 18:00:00'
        )
            ? '-'
            : moment(timeNow).format('HH:mm:ss'),
        description: moment(moment(timeNow).format(timeFormat)).isSameOrBefore(
            moment(timeNow).format('YYYY-MM-DD') + ' 09:00:00'
        )
            ? 'hadir'
            : moment(moment(timeNow).format(timeFormat)).isAfter(
                  moment(timeNow).format('YYYY-MM-DD') + ' 18:00:00'
              )
            ? 'tidak hadir'
            : 'terlambat',
    }

    const _data = await historySchema.insertHistory(data)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Submit attendance history user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Submit attendance history user success',
        data: _data.data,
    })
}

module.exports = {
    addHistory,
    updateHistoryById,
    getAllHistoryUser,
    submitAttendance,
}
