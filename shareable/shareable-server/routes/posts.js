import express from "express"
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js"
import verifyToken from "../middleware/auth.js"

const router = express.Router()

//read
//display all posts
router.get("/", verifyToken, getFeedPosts)
//get users posts
router.get("/:userId/posts", verifyToken, getUserPosts)


//update
//for liking and unliking post
router.patch("/:id/like", verifyToken, likePost)

export default router