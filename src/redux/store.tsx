
import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import { addToCart, removeFromCart, totalPrice } from "./slices/cart-slice";

const storageMiddlware = createListenerMiddleware();
storageMiddlware.startListening({
    matcher: isAnyOf(addToCart, removeFromCart),
    effect: (action, api) => {
        api.dispatch(totalPrice());
    },
});

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).prepend(storageMiddlware.middleware),
});

export default store