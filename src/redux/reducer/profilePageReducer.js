import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = ' ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    postData: [
        {id: 1, message: 'how are you'},
        {id: 2, message: 'how do you do'},
        {id: 3, message: 'Люблю Сашеньку'}
    ],
    profile: null,
    status: '',
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger;
            return {
                ...state,
                postData: [...state.postData, {id: 5, message: action.newMessageBody}]
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile

            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status

            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.post.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photo: action.photo}
            }
        }

        default:
            return state;
    }

};
//      AC- actionCreator
export const addPostAC = (newMessageBody) => ({type: ADD_POST, newMessageBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO_SUCCESS, photo});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));

};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    debugger;
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photo));
    }
};

export default profilePageReducer;