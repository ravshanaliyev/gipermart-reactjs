import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart") as string)
        : [],
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total") as string)
        : 0,
    totalItems: localStorage.getItem("totalItems")
        ? JSON.parse(localStorage.getItem("totalItems") as string)
        : 0,
    count: 1
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            if (state.cart.find((i: any) => i.id === item.id)) return
            state.cart.push(item)
            state.count++
            state.totalItems++
            state.total += item.price
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("total", JSON.stringify(state.total))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload
            const index = state.cart.findIndex((item: any) => item.id === itemId)

            if (index >= 0) {

                state.totalItems--
                state.count--
                state.total -= state.cart[index].price
                state.cart.splice(index, 1)
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
            }
        },
        totalPrice: (state) => {
            state.total = state.cart.reduce((total: any, item: any) => total + item.price, 0);
        },
        toggleAmmount: (state, action) => {
            const { id, type } = action.payload;
            if (type === "addToCart") {
                const newArr = state.cart.map((el: any) => {
                    if (id == el.id) {
                        return {
                            ...el,
                            totalItems: el.count + 1,
                            total: (el.count + 1) * el.price,
                        };
                    }

                    return el;
                });
                return { ...state, cart: newArr };
            }
            if (type === "removeFromCart") {
                const newArr = state.cart.map((el: any) => {
                    if (id == el.id) {
                        return {
                            ...el,
                            totalItems: el.count - 1,
                            total: (el.count - 1) * el.price,
                        };
                    }

                    return el;
                });
                return { ...state, cart: newArr };
            }
        }
    }

});


export const { addToCart, removeFromCart, totalPrice, toggleAmmount } = cartSlice.actions
export default cartSlice.reducer;