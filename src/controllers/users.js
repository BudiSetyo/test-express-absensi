const usersSchema = require('../schemes/users')
const { response } = require('../utils/response')
const bcrypt = require('bcrypt')

const addUser = async (req, res) => {
    const data = req.body

    const checkUser = await usersSchema.getUserByNik(data.nik)

    if (checkUser.data?.length !== 0) {
        return response(res, 400, {
            error: true,
            message: 'User already exist',
        })
    }

    bcrypt.hash(data.password, 10, async (err, hash) => {
        if (err) {
            return response(res, 400, {
                error: true,
                message: 'Insert user failed',
            })
        }

        const _data = await usersSchema.insertUser({
            ...data,
            password: hash.toString(),
        })

        if (_data.error) {
            return response(res, 400, {
                error: true,
                message: 'Insert user failed',
            })
        }

        return response(res, 200, {
            error: false,
            message: 'Insert user success',
        })
    })
}

const getAlluser = async (req, res) => {
    const _data = await usersSchema.getAlluser()

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get all user success',
        data: _data.data,
    })
}

const getUserByNik = async (req, res) => {
    const { nik } = req.query

    const _data = await usersSchema.getUserByNik(nik)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get user success',
        data: _data.data,
    })
}

const updateUserById = async (req, res) => {
    const data = req.body
    const { userId } = req.query

    const _data = await usersSchema.updateUserById(data, userId)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Update user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Update user success',
    })
}

const deleteUserById = async (req, res) => {
    const { userId } = req.query

    const _data = await usersSchema.deleteUserById(userId)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Delete user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Delete user success',
    })
}

module.exports = {
    addUser,
    getAlluser,
    getUserByNik,
    updateUserById,
    deleteUserById,
}
