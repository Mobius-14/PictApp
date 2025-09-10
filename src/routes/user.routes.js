const { Router } = require('express')

const router = Router()

// Controllers
const { register, viewProfile } = require("../controllers/user.controller")

// Register Route
router.post("/register", register)

// View Profile Route
router.get("/profile/:id", viewProfile)

module.exports = router