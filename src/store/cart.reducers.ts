import { addItemAction, removeItemAction } from "./cart.actions";
import { CartSlice } from "./store";

function addItemReducer(state: CartSlice[] = [], payload: any) {
    return [...state || [] as any[], payload]
}

function removeItemReducer(state: CartSlice[] = [], payload: number) {
    return (state || [] as any[]).filter((item, idx) => idx !== payload);
}

export function cartReducers(state: CartSlice[] = [], action: any) {
    switch (action.type) {
        case addItemAction:
            return addItemReducer(state, action.payload);
        case removeItemAction:
            return removeItemReducer(state, action.payload);
        default:
            return state
    }
}
