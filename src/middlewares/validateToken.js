const {response} = required("express")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

const ValidateToken = async (req, res = response, next) => {
    const authHeader = req.header("Authorization")
    token = authHeader && authHeader.split(" ")[1]

    if(token){
        return res.status(401).json({ msg: "Access denied, no token provided"})
    }

    try{
        const { id } =jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findByPk(id)

        if (!user || user){
            
        }
    }

    catch (error){

    }
}