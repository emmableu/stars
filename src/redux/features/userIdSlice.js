import { createSlice} from '@reduxjs/toolkit'
import Cookies from "js-cookie";
import {isUserCreated} from "../../globalConfig";



export const userIdSlice = createSlice({
    name: 'userIdSlice',
    initialState: {data: isUserCreated()?localStorage.getItem('userId'):undefined},
    reducers: {
        setUserId: (state, action) => {
            state.data = action.payload;
            localStorage.setItem("userId", action.payload);
            Cookies.set("userId", action.payload);
            Cookies.set("snapIDHash", action.payload);
        },
        clearUserId: (state, action) => {
            state.data = undefined;
            Cookies.remove("userId");
        },
    },
})

export const { setUserId, clearUserId } = userIdSlice.actions
export default userIdSlice.reducer
