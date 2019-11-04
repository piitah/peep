const express = require('express')
const router = express.Router()
const Controllers = require('../../controllers/userController')
const verify = require('../../middleware/auth')

router.get('/:id', verify.auth, Controllers.getUser)

module.exports = router