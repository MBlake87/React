import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer";
import helmet from "helmet"
import morgan from "morgan";
import path from "path"
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import verifyToken from "./middleware/auth.js";
import postRoutes from "./routes/posts.js"
import { createPost } from "./controllers/posts.js"
import User from "./models/Users.js"
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js"
//config

//variable for filename/dirname - might not need to set this - test later
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

//assign app to express function
const app = express()

//parses incoming json requests to req.body
app.use(express.json())
//middleware to help protect site
app.use(helmet())
//blocks other from using cross site scripting to access your resources
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
//used to log http req,res
app.use(morgan("common"))
//middleware to return json or urlenc with a limit of 30mb
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
//for cross origin sharing
app.use(cors())
//directory of assets
app.use("/assets", express.static(path.join(__dirname, "public/assets")))

//Multer file storage setup - from docs
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })

//routes
//hits register route, uses middleware to upload picure to assets first then runs register
app.post("/auth/register", upload.single("picture"), register)
app.post("/posts", verifyToken, upload.single("picture"), createPost)

app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/posts", postRoutes)

//mongoose settings
const port = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(port, () => console.log(`Server running on port ${port}`))
        // User.insertMany(users)
        // Post.insertMany(posts)
    })
    .catch((error) => console.log(`${port} did not connect`))