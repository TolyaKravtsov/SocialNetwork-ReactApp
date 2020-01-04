import {authAPI} from "../../api/api";
import actions from "redux-form/lib/actions";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = '/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    inProgress: false,
    isAuth: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};

//      AC- actionCreator
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.loginUser(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let errorMessage = response.data.messages;
        let error = stopSubmit("login", {_error: errorMessage});
        dispatch(error);
    }
};
export const logoutUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logoutUser(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
export default authReducer;