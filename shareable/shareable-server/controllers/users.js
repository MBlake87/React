import User from "../models/Users.js";

//Read

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

export const getUserFriends = async (res, req) => {
    try {
        //get id from req.params
        const { id } = req.params
        //await user id from database
        const user = await User.findById(id)
        //map over user.friends, get their id then find user in database
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id)))
        //map over new friends array return the information for front end
        const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return { _id, firstName, lastName, occupation, location, picturePath }
        })
        res.status(200).json(formattedFriends)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

//update

export const addRemoveFriend = async (req, res) => {
    try {
        //get id and friend id from req.params
        const { id, friendId } = req.params
        const user = await User.findById(id)
        const friend = await User.friendId(friendId)

        // if user.friend includes the friend id, use filter to remove the friend from the user and the user from the friend. If not push friend id 
        if (user.friend.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId)
            friend.friends = friend.friend.filter((id) => id !== id)
        } else {
            user.friends.push(friendId)
            friend.friends.push(id)
        }
        //save the updated data
        await user.save()
        await friend.save()

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id)))
        const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return { _id, firstName, lastName, occupation, location, picturePath }
        })
        res.status(200).json(formattedFriends)


    } catch (err) { res.status(404).json({ message: err.message }) }


}