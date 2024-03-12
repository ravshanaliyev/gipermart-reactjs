import { createSlice } from "@reduxjs/toolkit";


const like = createSlice({
    name: "data",
    initialState: {
        data: [],
    },
    reducers: {
        addLike: (state: any, action) => {
            return { ...state, data: [...state.data, action.payload] };
        },
        removeLike: (state, action) => {
            return {
                ...state,
                data: state.data.filter((el: any) => el.id !== action.payload.id),
            };
        },
    },
});

export const { addLike, removeLike } = like.actions;

export default like.reducer;