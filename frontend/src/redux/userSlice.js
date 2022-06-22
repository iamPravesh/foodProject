import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phoneNumber: "",
    userToken: localStorage.getItem("userToken") || "",
    isLoggedIn: localStorage.getItem("userToken") && localStorage.getItem("userToken").length > 0 ? true : false,
    userName: "",
    userEmail: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        loginUser: (state, action) => {
            localStorage.setItem("userToken", action.payload);
            state.userToken = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            localStorage.removeItem("userToken");
            state.userToken = "";
            state.isLoggedIn = false;
        },
    }
})

export const { setPhoneNumber, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;