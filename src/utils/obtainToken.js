const jwt = require("jsonwebtoken")

const obtainTokenId = (token) => {
    const secret = process.env.JWT_SECRET
    const { id } = jwt
}