const express = require ('express')
const {signup, signin, signout} = require('../controllers/auth')
const {userSignupValidator} = require("../Validator")

const router = express.Router()



router.post('/signup',userSignupValidator, signup )
router.post('/sigin', signin);
router.get('/signout', signout);



module.exports = router;