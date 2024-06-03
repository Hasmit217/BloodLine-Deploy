import { createSlice } from "@reduxjs/toolkit";


export const bbProfilePic = createSlice({
    initialState: {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg" 
    },
    name: "bbProPic",
    reducers: {
        updateImageUrl: (state, action) => {
            state.imageUrl = action.payload;
        }
    },
});

export const { updateImageUrl } = bbProfilePic.actions;

export default bbProfilePic.reducer;