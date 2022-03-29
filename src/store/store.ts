import { combineReducers } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { cartReducers } from './cart.reducers';
import { userSettingsReducer } from './userSettings.reducers';


export interface IStore {
    userSettings?: UserSettingsSlice;
    cart?: CartSlice[];
}
export interface UserSettingsSlice {
    [prop: string]: any;
}

export interface CartSlice {
    [prop: string]: any;
}

const rootReducer = combineReducers({
    userSettings: userSettingsReducer,
    cart: cartReducers
});

export const store = createStore(rootReducer);