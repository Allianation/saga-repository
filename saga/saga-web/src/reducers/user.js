export const types = {
    USER_INFO_REQUEST: "users/USER_INFO_REQUEST",
    USER_INFO_SUCCESS: "users/USER_INFO_SUCCESS",
    USER_INFO_ERROR: "users/USER_INFO_ERROR",
};

export const INITIAL_STATE = {
    user: null,
    isFetching: false,
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.USER_INFO_SUCCESS:
            return { ...state, user: action.user, isFetching: false };
        case types.USER_INFO_REQUEST:
            return { ...state, isFetching: true };
        case types.USER_INFO_ERROR:
            return { ...state, isFetching: false };

        default:
            return state;
    }
};

export const actions = {
    userInfoRequest: () => ({
        type: types.USER_INFO_REQUEST,
    }),

    userInfoSuccess: (user) => ({
        type: types.USER_INFO_SUCCESS,
        user,
    }),

    userInfoError: () => ({
        type: types.USER_INFO_ERROR,
    }),
};

export const selectors = {
    getUserInfo: ({ users }) => users.user,
    isFetching: ({ users }) => users.isFetching,
};
