const express = require('express')
const router = express.Router()
const verify = require('../../middleware/auth')
const Controllers = require('../../controllers/followController')

router.post('/', verify.auth, Controllers.createFollow)
router.delete('/:id', verify.auth, Controllers.deleteFollow)

module.exports = router