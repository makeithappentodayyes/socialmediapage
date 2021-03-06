const express = require ('express')
const {signup, signin} = require('../controllers/auth')
const {userSignupValidator} = require("../Validator")

const router = express.Router()



router.post('/signup',userSignupValidator, signup )
router.post('/sigin', signin)

module.exports = router;