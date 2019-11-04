const express = require('express')
const router = express.Router()
const Controllers = require('../../controllers/userController')
const verify = require('../../middleware/auth')

router.get('/', verify.auth, Controllers.getAuthUser)
router.post('/', verify.auth, Controllers.updateCoverImage)

module.exports = router