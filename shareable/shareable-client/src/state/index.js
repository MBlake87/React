import { createSlice } from "@reduxjs/toolkit"


//set initial state values
const initialState = {

    mode: "light",
    user: null,
    token: null,
    posts: [],

}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    //all functions to control state
    reducers: {
        //sets mode state if currently light change to dark and vice versa
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        //sets user and token to the data passed in
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        //sets user and token to null
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        //if user exists, sets the friends to users friends if not error
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends
            } else {
                console.error("user friends non-existent")
            }
        },
        //sets the posts to state
        setPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        //takes list of posts, maps over and returns updated post if not returns posts
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post
                return post
            })
            state.posts = updatedPosts
        }
    }
})

//export all actions so can be called
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions
//export reducers to add to store
export default authSlice.reducer