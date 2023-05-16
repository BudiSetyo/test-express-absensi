const { response } = require('../utils/response')
const tokenServices = require('../services/token')

const authentication = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return response(res, 400, {
            error: true,
            message: 'No token provided!',
        })
    }

    const verify = await tokenServices.verifyToken(token)

    if (verify.message && verify.message !== 'jwt expired') {
        return response(res, 400, {
            error: true,
            message: verify.message,
        })
    }

    if (verify.message === 'jwt expired') {
        return response(res, 400, {
            error: true,
            message: 'You have to login!',
        })
    }

    req.credential = {
        id: verify.id,
        nik: verify.nik,
        name: verify.name,
        role: verify.role,
    }

    return next()
}

const otorization = async (req, res, next) => {
    const { role } = req.credential

    if (role.toString() === 'admin') {
        return next()
    }

    return response(res, 400, {
        error: true,
        message: "You don't have access",
    })
}

const checkToken = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return response(res, 400, {
            error: true,
            message: 'No token provided!',
        })
    }

    const verify = await tokenServices.verifyToken(token)

    if (verify.message && verify.message !== 'jwt expired') {
        return response(res, 400, {
            error: true,
            message: verify.message,
        })
    }

    if (verify.message === 'jwt expired') {
        return response(res, 400, {
            error: true,
            message: 'You have to login!',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Token verified',
    })
}

module.exports = {
    authentication,
    checkToken,
    otorization,
}
