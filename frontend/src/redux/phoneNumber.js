import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phoneNumber: "",
}

export const phoneSlice = createSlice({
    name: "phoneNumber",
    initialState,
    reducers: {
        setPhoneNumber: (state , action) => {
            state.phoneNumber = action.payload
        }
    }
})

// action for each reducer
export const {setPhoneNumber} = phoneSlice.actions;

// reducer
export default phoneSlice.reducer;