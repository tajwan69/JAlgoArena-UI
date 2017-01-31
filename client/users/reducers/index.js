import * as types from "../../constants/ActionTypes";

const defaultStartState = {
    user: null,
    error: null,
    users: null,
    updatedUser: null
};

export function auth(state = defaultStartState , action) {
    switch (action.type){

        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, { user: action.user, error: null });

        case types.LOGIN_FAIL:
        case types.SIGNUP_FAIL:
            return Object.assign({}, state, { user: null, error: action.error });

        case types.CHECKED_SESSION_STATUS:
            if (action.user && action.user.id){
                return Object.assign({}, state, {
                    user: action.user,
                    error: null
                });
            }

            return defaultStartState;

        case types.LOGOUT_SUCCESS:
            return defaultStartState;

        case types.NAVIGATE_AWAY_FROM_AUTH_FORM:
        case types.SIGNUP_SUCCESS:
            return Object.assign({}, state, { error: null });

        case types.FETCH_USERS:
            return Object.assign({}, state, { users: action.users });

        case types.USER_UPDATED:
            return Object.assign({}, state, { updatedUser: action.userUpdated});

        default:
            return state;
    }
}
