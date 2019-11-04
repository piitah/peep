const express = require('express')
const router = express.Router()
const Controllers = require('../../controllers/userController')
const verify = require('../../middleware/auth')

router.post('/', verify.auth, Controllers.updateProfileImage)

module.exports = router