import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import User from "../models/Users.js"

//register

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation } = req.body

        //uses bcrypt to generate salt then passes password and salt to bcrypt to encrypt password
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            likes: Math.floor(Math.random() * 1000)
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (err) { res.staus(500).json({ error: err.message }) }
}

//login function
export const login = async (res, req) => {
    try {
        //get email, password from input
        const { email, password } = req.body
        //get mongoose to search database for matching user
        const user = await Users.findOne({ email: email })
        //if user does not exist reply with error
        if (!user) return res.status(400).json({ msg: "User does not exist. " })
        //user bcrypt to check if password is same
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: "Invalid Password" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        delete user.password
        res.status(200).json({ token, user })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }


}