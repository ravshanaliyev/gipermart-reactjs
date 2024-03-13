import { loadState } from "@/config/local-save";
import { createSlice } from "@reduxjs/toolkit";


const data = createSlice({
    name: "data",
    initialState: {
        data: loadState("data") || [],
    },
    reducers: {
        add: (state: any, action) => {
            return { ...state, data: [...state.data, { ...action.payload, count: 1, userPrice: action.payload.price }] };
        },
        countVal: (state) => {
            let newcount = 0;
            state.data.forEach(() => {
                newcount++;
            });

            return { ...state, count: newcount }
        },
        remove: (state, action) => {
            return {
                ...state,
                data: state.data.filter((el: any) => el.id !== action.payload),
            };
        },
        toggleAnmount: (state: any, action) => {
            const { id, type } = action.payload;
            if (type === "add") {
                const newArr = state.data.map((el: any) => {
                    if (id == el.id) {
                        return {
                            ...el,
                            count: el.count + 1,
                            userPrice: (el.count + 1) * el.price,
                        };
                    }

                    return el;
                });
                return { ...state, data: newArr };
            }
            if (type === "remove") {
                const newArr = state.data.map((el: any) => {
                    if (id == el.id) {
                        return {
                            ...el,
                            count: el.count - 1,
                            userPrice: (el.count - 1) * el.price,
                        };
                    }

                    return el;
                });
                return { ...state, data: newArr };
            }
        },
    },
});

export const { add, remove, countVal, toggleAnmount } = data.actions;

export default data.reducer;