const jwt = require('jsonwebtoken')

const generateToken = (data) => {
    try {
        return jwt.sign(data, process.env.SECRET, {
            expiresIn: process.env.EXPIRE,
        })
    } catch (err) {
        return err
    }
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET)
    } catch (err) {
        return err
    }
}

module.exports = {
    generateToken,
    verifyToken,
}
