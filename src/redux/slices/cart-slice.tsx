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
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            if (state.cart.find((i: any) => i.id === item.id)) return
            state.cart.push(item)
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
                state.total -= state.cart[index].price
                state.cart.splice(index, 1)
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
            }
        },

    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;