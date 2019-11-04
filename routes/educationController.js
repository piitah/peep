const express = require('express')
const router = express.Router()
const verify = require('../middleware/auth')
const Controllers = require('../controllers/profileController')

router.post('/', verify.auth, Controllers.Education)
router.delete('/', verify.auth, Controllers.deleteEducationById)

module.exports = router