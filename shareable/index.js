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

//mongoose settings
const port = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(port, () => console.log(`Server running on port ${port}`))
    })
    .catch((error) => console.log(`${port} did not connect`))