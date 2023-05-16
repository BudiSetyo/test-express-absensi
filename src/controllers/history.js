const historySchema = require('../schemes/history')
const { response } = require('../utils/response')

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

module.exports = {
    addHistory,
    updateHistoryById,
    getAllHistoryUser,
}
