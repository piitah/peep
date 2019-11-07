const Comment = require('../models/comment')
const Post = require('../models/post')
const userModel = require('../models/user')

exports.createComment = async (req, res) => {
    new Comment({
        author: req.user.id,
        comment: req.body.comment,
        post: req.body.postId
    }).save(async (err, comment) => {
        if (err) return res.status(500)
        // push comment to post colllection
        let post = await Post.findOneAndUpdate(
            { _id: comment.post },
            {
                $push: { comments: comment._id }
            }
        )

        if (!post) return res.status(502).send("error");
        // push comment to user collection
        let user = await userModel.User.findOneAndUpdate(
            { _id: comment.author },
            {
                $push: {
                    comments: comment._id
                }
            }
        )

        if (!user) return res.status(502).send("error");
        return res.status(200).send({
            status: true,
            payload: comment
        });
    })



}

exports.deleteComment = async (req, res) => {

    // delete comment from comment collection
    const comment = await Comment.findByIdAndRemove({ _id: req.params.commentId })
    if (!comment) {
        res.status(502).send({
            error: "error"
        })
    }
    // delete comment from user collection
    const user = await userModel.User.findOneAndUpdate(
        { _id: req.user },
        { $pull: { comments: comment._id } }
    )
    if (!user) {
        res.status(502).send({
            error: "error"
        })

    }

    const post = await Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $pull: { comments: comment._id } }
    )

    if (!post) {
        res.status(502).send({
            error: "error"
        })

    }
    res.status(200).send("successfully deteled comment")


}