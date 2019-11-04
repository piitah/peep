const express = require('express')
const router = express.Router()
const Post = require('../../controllers/postController')
const verify = require('../../middleware/auth')

router.post('/', verify.auth, Post.createPost)
router.delete('/', verify.auth, Post.deletePost)

module.exports = router;