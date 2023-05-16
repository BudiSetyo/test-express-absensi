const UsersModel = require('../models/users')

const insertUser = async (data) => {
    try {
        const _data = await UsersModel.query().insert(data)

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

const getAlluser = async () => {
    try {
        const _data = await UsersModel.query()

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

const getUserByNik = async (nik) => {
    try {
        const _data = await UsersModel.query().where({ nik: nik })

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        // console.log(err)
        return {
            error: true,
            data: err,
        }
    }
}

const updateUserById = async (data, id) => {
    try {
        const _data = await UsersModel.query().patch(data).where({ id: id })

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        // console.log(err)
        return {
            error: true,
            data: err,
        }
    }
}

const deleteUserById = async (id) => {
    try {
        const _data = await UsersModel.query().deleteById(id)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        // console.log(err)
        return {
            error: true,
            data: err,
        }
    }
}

module.exports = {
    insertUser,
    getAlluser,
    getUserByNik,
    updateUserById,
    deleteUserById,
}
