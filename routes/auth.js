const express = require ('express')
const {signup} = require('../controllers/auth')
// const validator = require("../Validator")

const router = express.Router()



router.post('/signup', signup);


module.exports = router;