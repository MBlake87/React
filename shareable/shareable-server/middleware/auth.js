import Jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    try {
        //recieve token from backend header
        let token = req.header("Authorization")
        //if no token return err
        if (!token) {
            return res.status(403).send("Access Denied")
        }
        //token starts with bearer, take all data from after
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft()
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }


}

export default verifyToken