import { setFirstNameAction, setLastNameAction } from "./userSettings.actions"

function setFirstNameReducer(state = {}, payload: any) {
    return { ...state, firstName: payload.firstName }
}

function setLastNameReducer(state = {}, payload: any) {
    return { ...state, lastName: payload.lastName }
}

export function userSettingsReducer(state = {}, action: any) {
    switch (action.type) {
        case setFirstNameAction:
            return setFirstNameReducer(state, action.payload);
        case setLastNameAction:
            return setLastNameReducer(state, action.payload);
        default:
            return state
    }
}
