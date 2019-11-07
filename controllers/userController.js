const helper = require('../helpers/helper');
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
}).single('file')

// user model schema
const UserModel = require('../models/user')
const Follow = require("../models/follow")

exports.SignUp = async (req, res) => {
    const isValid = UserModel.validate(req.body)

    if (isValid.error) {
        res.status(400).json({
            message: isValid.error.details[0].message
        })
    }

    const hashedPassword = await helper.hashPassword(req.body.password);
    await UserModel.User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                try {
                    const newUser = new UserModel.User({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: hashedPassword
                    })
                    newUser.save(function (err, user) {
                        if (err) {
                            res.status(400).send(err)
                        }
                        res.status(200).send({
                            status: user.email + " registered successfully"
                        })
                    })
                } catch (err) {
                    res.status(400).send({
                        error: err
                    })
                }

            }
            if (user) {
                res.status(400).send({
                    message: "user alredy exist"
                })
            }
        })
}
exports.loginIn = async (req, res) => {
    const isValid = UserModel.validateLogin(req.body)
    if (isValid.error) {
        return res.status(400).send(isValid.error.details[0].message)
    }

    await UserModel.User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    error: "User does not exist"
                })
            }
            if (user) {
                try {
                    if (!helper.comparePassword(user.password, req.body.password)) {
                        return res.status(400).send({
                            error: "Incorrect password"
                        })
                    }
                    let userId = {
                        id: user._id
                    }
                    const token = helper.generateToken(userId)

                    return res.status(200).send({
                        token: token,
                        message: "login succesful"
                    })
                } catch (err) {
                    return res.status(400).send({
                        error: err + "errormsg"
                    })
                }
            }
        })
}

exports.updateCoverImage = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.send('no file uploaded')
        }

        let profileUpdate = {
        }
        if (req.body.image) { profileUpdate.coverImage = req.body.image }

        UserModel.User.findOneAndUpdate(
            { _id: req.user.id },
            { $set: profileUpdate },
            { new: true }
        ).then(user => {
            res.status(200).send({
                status: true,
                payload: user
            })
        })
            .catch(err => {
                res.status(400).send(" error occured")
            })
    })
}
exports.updateProfileImage = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.send('no file uploaded')
        }

        let profileUpdate = {

        }
        if (req.body.image) { profileUpdate.image = req.body.image }

        UserModel.User.findOneAndUpdate(
            { _id: req.user.id },
            { $set: profileUpdate },
            { new: true }
        ).then(user => {
            res.status(200).send({
                status: true,
                payload: user
            })
        })
            .catch(err => {
                res.status(400).send(" error occured")
            })
    })
}
exports.getAuthUser = async (req, res) => {
    await UserModel.User.findById({ _id: req.user.id })
        .populate('likes')
        .populate('followers')
        .populate('following')
        .then(user => {
            try {
                res.status(200).send(user)
            } catch (error) {
                res.status(400).send(error)
            }
        })
}
exports.getUser = async (req, res) => {
    await UserModel.User.findOne({ _id: req.params.id })
        .then(user => {
            try {
                res.status(200).send(user)
            } catch (error) {
                res.status(400).send(error)
            }
        })
}

exports.searchController = async (req, res) => {
    const searchQuery = req.query.search
    let users = await UserModel.User.find({
        $or: [
            { firstname: new RegExp(searchQuery, 'i') },
            { lastname: new RegExp(searchQuery, 'i') },
        ]
    })
    if (users.length === 0) {
        return res.status(404).send("not found")
    }
    return res.status(200).send({
        payload: users
    })
}

exports.getUserPost = async (req, res) => {
    await Post.find({ author: req.user.id })
        .populate('author')
        .populate('likes')
        .populate({
            path: 'comments',
            options: { sort: { createdAt: 'desc' } },
            populate: { path: 'author' }
        })
        .sort({ createdAt: 'desc' })
        .then(post => {
            try {
                res.status(200).send(post)
            } catch (error) {
                res.status(400).send(error)
            }
        })
}

exports.suggestion = async (req, res) => {
    const userFollowing = []
    const follow = await Follow.find({ follower: req.user.id }, { _id: 0 }).select('user')
    follow.map(f => userFollowing.push(f.user))

    const query = { _id: { $nin: userFollowing } };

    await UserModel.User.find(query)
        .then(user => {
            try {
                res.status(200).send({
                    status: true,
                    payload: user
                })
            } catch (error) {
                res.status(400).send({
                    status: false,
                    payload: " error" + error
                })
            }
        })

}
exports.getAllUser = async (req, res) => {
    const count = await UserModel.User.find({ _id: { $ne: req.user.id } }).countDocuments()
    await UserModel.User.find({ _id: { $ne: req.user.id } })
        .populate('following')
        .populate('followers')
        .sort({ createdAt: 'desc' })
        .then(users => {
            try {
                res.status(200).send(users, count)
            } catch (error) {
                res.status(400).send(error)
            }
        })
}
