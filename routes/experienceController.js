const express = require('express')
const router = express.Router()
const Controllers = require('../controllers/profileController')
const verify = require('../middleware/auth')

router.post('/', verify.auth, Controllers.Experience)

module.exports = router