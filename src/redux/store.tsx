import {
    createListenerMiddleware,
    isAnyOf,
    configureStore,
} from "@reduxjs/toolkit";
import data, { countVal, add, remove } from "./slices/cart-slice";
import { saveState } from "@/config/local-save";

const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
    matcher: isAnyOf(add, remove),
    effect: (action, api) => {
        api.dispatch(countVal());
    },
});
export const store = configureStore({
    reducer: {
        data: data,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(storageMiddlware.middleware),
});
store.subscribe(() => {
    saveState("products", store.getState().data);
})