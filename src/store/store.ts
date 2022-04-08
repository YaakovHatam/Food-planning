import { combineReducers } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { cartReducers } from './cart.reducers';
import { userSettingsReducer } from './userSettings.reducers';
import createSagaMiddleware from 'redux-saga'

import cartSideEffects from './cart.side-effects';

const sagaMiddleware = createSagaMiddleware()

export interface IStore {
    userSettings?: UserSettingsSlice;
    cart?: CartSlice[];
}
export interface UserSettingsSlice {
    firstName: string;
    lastName: string;
    email: string;
}

export interface CartSlice {
    [prop: string]: any;
}

const rootReducer = combineReducers({
    userSettings: userSettingsReducer,
    cart: cartReducers
});


export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(cartSideEffects)
