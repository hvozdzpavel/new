import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./users/userReducer";

export default configureStore({
    reducer: {
        user: userReducer
    }
})