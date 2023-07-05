import Post from "../models/Post.js"
import User from "../models/Users.js"

//create
export const createPost = async (req, res) => {
    try {
        //get userId, description and picturepath from input
        const { userId, description, picturePath } = req.body
        //find user by id
        const user = await User.findbyId(userId)
        //new post then equals object with the data passed in
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save()
        //return all updated posts
        const post = await Post.find()
        res.status(201).json(post)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

//read
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getUserPosts = async (req, res) => {
    try {
        //get user id from params
        const { userId } = req.params
        //find all posts from userId and return
        const post = await Post.find({ userId })
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

//update comment
export const likePost = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.body
        //find post by post id
        const post = await Post.findbyId(id)
        //checks the post for userId
        const isLiked = post.likes.get(userId)
        //if userId is found, delete id (unlike) else like the post
        if (isLiked) {
            post.likes.delete(userId)
        } else {
            post.likes.set(userId, true)
        }
        //updated post - using Id, pass in the new likes object and create new object.
        const updatedPost = await Post.findbyIdAndUpdate(
            id, {
            likes: post.likes
        },
            { new: true })
        res.status(200).json(updatedPost)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

