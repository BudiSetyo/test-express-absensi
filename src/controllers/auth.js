const usersSchema = require('../schemes/users')
const { response } = require('../utils/response')
const token = require('../services/token')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    const data = req.body

    const user = await usersSchema.getUserByNik(data.nik)

    const hashPassword = user.data[0].password
    const jwtData = user.data[0]

    if (user.data.length === 0) {
        return response(res, 400, {
            error: true,
            message: 'User not found',
        })
    }

    if (user.error) {
        return response(res, 400, {
            error: true,
            message: 'Get user data failed',
        })
    }

    bcrypt.compare(data.password, hashPassword, (err, result) => {
        if (err) {
            return response(res, 400, {
                error: true,
                message: err.message,
            })
        }

        if (!result) {
            return response(res, 400, {
                error: true,
                message: "password doesn't match",
            })
        }

        const jwt = token.generateToken({
            id: jwtData.id,
            nik: jwtData.nik,
            name: jwtData.name,
            role: jwtData.role,
        })

        return response(res, 200, {
            error: false,
            message: 'Login success',
            data: {
                id: jwtData.id,
                nik: jwtData.nik,
                name: jwtData.name,
                role: jwtData.role,
                token: jwt,
            },
        })
    })
}

module.exports = {
    login,
}
