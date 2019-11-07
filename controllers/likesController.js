const Like = require('../models/likes')
const Post = require('../models/post')
const userModel = require('../models/user')

exports.createLike = async (req, res) => {
    new Like({
        post: req.body.postId,
        author: req.user.id,
    }).save(async (err, like) => {
        // if there is a err
        if (err) return res.status(502).send(err);

        // push like to user collection
        let user = await userModel.User.findByIdAndUpdate(
            { _id: like.author },
            { $push: { likes: like._id } }
        )
        // if there is an error pushing like to user collection
        if (!user) return res.status(500).send({
            error: "error"
        })
        // push like to post collection
        let post = await Post.findByIdAndUpdate(
            { _id: like.post },
            { $push: { likes: like._id } }
        )
        //  err
        if (!post) return res.status(500).send({
            error: "error"
        })

        return res.status(200).send({
            status: true,
            payload: like
        });
    })
}

exports.deleteLike = async (req, res) => {
    // delete like from like collection
    const like = await Like.findByIdAndRemove({ _id: req.params.id })
    if (!like) return res.status(500).send({
        error: "error"
    })

    // delete like from user collection
    const user = await userModel.User.findByIdAndUpdate(
        { _id: like.author },
        { $pull: { likes: like._id } }
    )
    if (!user) return res.status(500).send({
        error: "error"
    })


    // delete like from post collection
    const post = await Post.findByIdAndUpdate(
        { _id: like.post },
        { $pull: { likes: like._id } }
    )
    if (!post) return res.status(500).send({
        error: "error"
    })
    res.status(200).send("successfully deleted")
}