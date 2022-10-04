import { createSlice } from '@reduxjs/toolkit'

const initialUser = {
    user_fetch: false,
    login: "",
    password: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
    },
    reducers: {
        getUser: state => {
            state.user.user_fetch = true
        },
        setUser: (state, action) => {
            console.log("SET USER", action.payload)
            state.user = { user_fetch: false, ...action.payload }
        },
        dropUser: state => {
            state.user = initialUser
        },
    }
})

export const { getUser, setUser, dropUser } = userSlice.actions
export default userSlice.reducer