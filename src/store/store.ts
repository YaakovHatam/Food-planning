import { createStore } from 'redux';

function userSettingsReducer(state = {}, action: any) {
    switch (action.type) {
        case 'userDetails/firstName':
            return { ...state, firstName: action.payload.firstName }
        case 'userDetails/lastName':
            return { ...state, lastName: action.payload.firstName }
        default:
            return state
    }
}

let store = createStore(userSettingsReducer)
/*
    1 - user navigate to update user settings component
    2 - user change the firstname input
    3 - user click on save
    4 - the component calls to the store.dispatch function
    5 - the arguments: type: 'userDetails/firstName', the new value: payload

store.dispatch({
    type: 'userDetails/firstName',
    payload: {
        firstName: 'the name from the input'
    }
})
*/