import { configureStore } from '@reduxjs/toolkit'
import userIdReducer from "./features/userIdSlice";

export default configureStore({
    reducer: {
        userId: userIdReducer
    },
})

