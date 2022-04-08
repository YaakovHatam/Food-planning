import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { makeApiCall } from '../services/api';
import { addItemAction, removeItemAction } from './cart.actions';

function* updateUserCart(action: any) {
    try {
        yield call(makeApiCall, {
            endpoint: '/cart',
            payload: action.payload
        });
        yield put({ type: "CART_UPDATED" });
    } catch (e) {
        yield put({ type: "CART_UPDATED_FAILED" });
    }
}


export default function* CartSideEffects() {
    yield takeEvery(addItemAction, updateUserCart);
    yield takeEvery(removeItemAction, updateUserCart);
}
