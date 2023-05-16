const HistoryModel = require('../models/history')

const insertHistory = async (data) => {
    try {
        const _data = await HistoryModel.query().insert(data)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const updateHistoryById = async (data, id) => {
    try {
        const _data = await HistoryModel.query().patch(data).where({ id: id })

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getAllHistoryUser = async (id) => {
    try {
        const _data = await HistoryModel.query()
            .leftJoinRelated('userHistory')
            .select(
                'history.userId',
                'history.date',
                'history.time',
                'history.description',
                'history.createdAt',
                'history.updatedAt'
            )
            .where('history.userId', id)
            .orderBy('history.createdAt', 'DESC')

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: false,
            data: _data,
        }
    }
}

const getHistoryByDate = async (date) => {
    try {
        const _data = await HistoryModel.query().where('date', date)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

module.exports = {
    insertHistory,
    updateHistoryById,
    getAllHistoryUser,
    getAllHistoryUser,
    getHistoryByDate,
}
