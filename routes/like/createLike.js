const express = require('express')
const router = express.Router()
const verify = require('../../middleware/auth')
const Controllers = require('../../controllers/likesController')

router.post('/', verify.auth, Controllers.createLike)
router.delete('/:id', verify.auth, Controllers.deleteLike)

module.exports = router