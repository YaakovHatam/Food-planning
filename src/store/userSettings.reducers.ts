import { UserSettingsSlice } from "./store";
import { setFirstNameAction, setLastNameAction, setUserAction } from "./userSettings.actions"

function setFirstNameReducer(state = {}, payload: any) {
    return { ...state, firstName: payload.firstName }
}

function setLastNameReducer(state = {}, payload: any) {
    return { ...state, lastName: payload.lastName }
}

function setUserReducer(state = {}, payload: any) {
    delete payload.password;
    return { ...payload }
}

export function userSettingsReducer(state = {}, action: any) {
    switch (action.type) {
        case setUserAction:
            return setUserReducer(state, action.payload);
        case setFirstNameAction:
            return setFirstNameReducer(state, action.payload);
        case setLastNameAction:
            return setLastNameReducer(state, action.payload);
        default:
            return state
    }
}
