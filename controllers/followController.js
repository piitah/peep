const Follow = require('../models/follow')
const userModel = require('../models/user')

exports.createFollow = async (req, res) => {
    new Follow({
        follower: req.user.id,
        user: req.body.userId
    }).save(async (err, follow) => {
        //  err
        if (err) return res.status(502).send({
            error: " error"
        })

        // push followers to user collection

        let following = await userModel.User.findByIdAndUpdate(
            { _id: follow.follower },
            { $push: { following: follow._id } }
        )
        // err
        if (!following) return res.status(500).send({
            error: "error"
        })

        let user = await userModel.User.findByIdAndUpdate(
            { _id: follow.user },
            { $push: { followers: follow._id } }
        )

        // err
        if (!user) return res.status(500).send({
            error: "error"
        })

        // return
        return res.status(200).send({
            status: true,
            payload: follow
        })

    })
}

exports.deleteFollow = async (req, res) => {
    // delete from follow collection
    const follow = await Follow.findByIdAndRemove({ _id: req.params.id });
    if (!follow) return res.status(500).send({
        error: " FIrst error"
    })

    // delete from user collection
    const following = await userModel.User.findByIdAndUpdate(
        { _id: follow.follower },
        { $pull: { following: follow._id } }
    )
    if (!following) {
        res.status(502).send({
            error: " second error"
        })
    }

    // delete from post collection
    const user = await userModel.User.findByIdAndUpdate(
        { _id: follow.user },
        { $pull: { followers: follow._id } }
    )
    if (!user) {
        res.status(502).send({
            error: "third error"
        })
    }

    res.status(200).send({
        message: "successful"
    })
}