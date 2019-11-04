const express = require('express')
const router = express.Router()
const Post = require('../../controllers/postController')
const verify = require('../../middleware/auth')

router.get('/', verify.auth, Post.getfollowedpost)

module.exports = router;