import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userToken: localStorage.getItem("userToken") || "",
    isLoggedIn: localStorage.getItem("userToken") && localStorage.getItem("userToken").length > 0 ? true : false,
}

export const tokenSlice = createSlice({
    name: "userToken",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            localStorage.setItem("userToken", action.payload);
            state.userToken = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            localStorage.removeItem("userToken");
            state.userToken = "";
            state.isLoggedIn = false;
        }
    }
})

// action for each reducer
export const { loginUser, logoutUser } = tokenSlice.actions;

// reducer
export default tokenSlice.reducer;