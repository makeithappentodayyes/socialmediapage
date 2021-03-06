const express = require ('express')
const {signup} = require('../controllers/auth')
const {userSignupValidator} = require("../Validator")

const router = express.Router()



router.post('/signup',userSignupValidator, signup )

module.exports = router;