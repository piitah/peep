const Post = require('../models/post')
const userModel = require('../models/user')
const Follow = require('../models/follow')
const Comment = require('../models/comment')

const multer = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

let upload = multer({
    storage: storage
}).single('file')

// Queries
exports.getAuthPost = async (req, res) => {
    await Post.find({ author: req.user.id })
        .populate('author')
        .populate({
            path: "likes",
            populate: "author",
            populate: "post"
        })
        .populate({
            path: 'comments',
            options: { sort: { createdAt: 'desc' } },
            populate: { path: 'author' }
        })
        .sort({ createdAt: 'desc' })
        .then(posts => {
            try {
                res.status(200).send({
                    status: true,
                    payload: posts
                })
            } catch (error) {
                res.status(400).send({
                    status: false,
                    payload: " error" + error
                })
            }
        })
}

exports.getPost = async (req, res) => {
    await Post.find({ author: req.params.id })
        .populate('author')
        .populate('likes')
        .populate({
            path: 'comments',
            options: { sort: { createdAt: 'desc' } },
            populate: { path: 'author' }
        })
        .sort({ createdAt: 'desc' })
        .then(posts => {
            try {
                res.status(200).send({
                    status: true,
                    payload: posts
                })
            } catch (error) {
                res.status(400).send({
                    status: false,
                    payload: " error" + error
                })
            }
        })
}

exports.getPostById = async (req, res) => {
    await Post.findById({ _id: req.params.id })
        .populate('author')
        .populate(
            {
                path: 'comments',
                options: { sort: { createdAt: 'desc' } },
                populate: { path: 'author' }
            }
        )
        .populate('likes')
        .sort({ createdAt: 'desc' })
        .then(post => {
            try {
                res.status(200).send({
                    status: true,
                    payload: post
                })
            } catch (error) {
                res.status(400).send({
                    status: false,
                    payload: "error" + error
                })
            }
        })
}

exports.getfollowedpost = async (req, res) => {
    const userFollowing = []
    const follow = await Follow.find({ follower: req.user.id }, { _id: 0 }).select('user')
    follow.map(f => userFollowing.push(f.user))
    const query = {
        $or: [{ author: { $in: userFollowing } }, { author: req.user.id }]
    }

    await Post.find(query)
        .populate('author')
        .populate({
            path: "likes",
            populate: { path: "post" }
        })
        .populate({
            path: 'comments',
            options: { sort: { createdAt: 'desc' } },
            populate: { path: 'author' }
        })
        .sort({ createdAt: 'desc' })
        .then(posts => {
            try {
                res.status(200).send({
                    status: true,
                    payload: posts
                })
            } catch (error) {
                res.status(400).send({
                    status: false,
                    payload: " error" + error
                })
            }
        })

}


// Mutations
exports.createPost = async (req, res) => {
    upload(req, res, (err) => {
        new Post({
            title: req.body.title,
            image: req.body.image,
            author: req.user.id
        }).save(async (err, post) => {
            // err
            if (err) return res.status(502).send({
                error: "error"
            })

            // push post id to user collection
            let user = await userModel.User.findOneAndUpdate(
                { _id: post.author },
                { $push: { posts: post._id } }
            )
            // err
            if (!user) {
                return res.status(500).send({
                    error: "error occured"
                })
            }
            res.status(200).send({
                message: "post created successfully"
            })
        })
    })
}
exports.deletePost = async (req, res) => {

    // delete post 
    const post = await Post.findByIdAndRemove({ _id: req.body.postId })
    if (!post) {
        return res.status(500).send({
            error: "error occured"
        })
    }

    // delete post id from user
    const user_post = await userModel.User.findOneAndUpdate(
        { _id: post.author },
        { $pull: { posts: post._id } }
    )
    if (!user_post) {
        return res.status(500).send({
            error: "error occured"
        })
    }

    // delete post from likes collection
    const like = await Likes.find({ post: post._id }).deleteMany();
    if (!like) {
        return res.status(500).send({
            error: "error occured"
        })
    }

    // delete post likes from user collection
    const user_like = await post.likes.map(async likesId => {
        await userModel.User.findOneAndUpdate({ likes: likesId }, {
            $pull: { likes: likesId }
        })
    })
    if (!user_like) {
        return res.status(500).send({
            error: "error occured"
        })
    }

    // delete post comment from post collection
    const comment = await Comment.find({ post: post._id }).deleteMany();
    if (!comment) {
        return res.status(500).send({
            error: "error occured"
        })
    }

    // delete comment likes from user collection
    const post_comment = await post.comments.map(async commentId => {
        await userModel.User.findOneAndUpdate({ comments: commentId }, {
            $pull: { comments: commentId },
        });
    })
    if (!post_comment) {
        return res.status(500).send({
            error: "error occured"
        })
    }
    res.status(200).send("deleted successfully")

}