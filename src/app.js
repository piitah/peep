const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require('path')
const passport = require('passport')
const dotenv = require('dotenv')

// routes

// users routes
const UserLoginIn = require('../routes/user/userLoginController')
const UserSignUp = require('../routes/user/userSignUpController')
const getAuthUser = require('../routes/user/getAuthUser')
const searchResult = require('../routes/user/searchResult')
const getUser = require("../routes/user/getUser")
const updateProfileImage = require("../routes/user/updateProfileImage")

const Education = require('../routes/educationController')
const Experience = require('../routes/experienceController')
const Profile = require('../routes/profileController')

// posts routes
const getPost = require("../routes/post/getPost")
const createPost = require('../routes/post/createPost')
const getAuthPost = require('../routes/post/getAuthPost')
const getFollowedPost = require('../routes/post/getFollowedPost')
const getPostById = require('../routes/post/getPostById')

const createComment = require('../routes/comment/createComment')
const createLike = require('../routes/like/createLike')
const createFollow = require('../routes/follow/createFollow')
const suggestion = require("../routes/user/suggestion.js")
// 
const app = express()

dotenv.config()

// use all middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(passport.initialize())

// setting headers for all route
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

// use all routes
app.use('/getAuthUser', getAuthUser)
app.use("/updateProfileImage", updateProfileImage)
app.use('/getAuthPost', getAuthPost)
app.use('/getFollowedPost', getFollowedPost)
app.use('/getPostById', getPostById)
app.use('/loginIn', UserLoginIn)
app.use('/signUp', UserSignUp)
app.use('/education', Education)
app.use('/experience', Experience)
app.use('/Profile', Profile)
app.use('/post', createPost)
app.use('/comment', createComment)
app.use("/search", searchResult)
app.use('/like', createLike)
app.use('/follow', createFollow)
app.use("/getPost", getPost)
app.use("/getUser", getUser)
app.use("/suggestion", suggestion)
// connecting to mongodb cluster
const db = require('../config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('mongodb connected')
    }).
    catch((err) => {
        console.log('error connecting to mongodb cluster' + err)
    })


if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../dist")))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../dist", "index.html"))
    })
}

// port
const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log('listening to port 3030')
})