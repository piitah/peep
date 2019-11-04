const express = require('express')
const router = express.Router()
const Post = require('../../controllers/postController')
const verify = require('../../middleware/auth')

router.get('/:id', verify.auth, Post.getPostById)

module.exports = router;