const express = require('express')
const router = express.Router()
const verify = require('../../middleware/auth')
const Controllers = require('../../controllers/commentController')

router.post('/', verify.auth, Controllers.createComment)
router.delete('/:id', verify.auth, Controllers.deleteComment)

module.exports = router