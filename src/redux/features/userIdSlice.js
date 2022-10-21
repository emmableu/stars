import { createSlice} from '@reduxjs/toolkit'
import Cookies from "js-cookie";
import {isUserCreated} from "../../globalConfig";



export const userIdSlice = createSlice({
    name: 'userIdSlice',
    initialState: {data: isUserCreated()?Cookies.get('userId'):undefined},
    reducers: {
        setUserId: (state, action) => {
            state.data = action.payload;
            Cookies.set("userId", action.payload);
        },
        clearUserId: (state, action) => {
            state.data = undefined;
            Cookies.remove("userId");
        },
    },
})

export const { setUserId, clearUserId } = userIdSlice.actions
export default userIdSlice.reducer
