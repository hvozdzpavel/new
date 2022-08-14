import { createSlice } from '@reduxjs/toolkit'

export interface UserWithPasswordsInterface {
    name: string,
    password: string,
    role: string,
}

export interface UserInterface {
    name: string,
    password: string,
    role: string,
}

export interface UserStateInterface {
    userList: UserWithPasswordsInterface[],
    user: UserInterface | null,
}

const initialState: UserStateInterface = {
    userList: [
        {name: 'admin', password: 'secret', role: 'admin'},
        {name: 'pasha', password: '1', role: 'user'},
        {name: 'ivan', password: '2', role: 'user'},
    ] ,
    user: null,
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { userLogin } = userReducer.actions

export default userReducer.reducer