import {usersAPI} from "../../api/api";

const ADD_POST = ' ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postData: [
        {id: 1, message: 'how are you'},
        {id: 2, message: 'how do you do'},
        {id: 3, message: 'Люблю Сашеньку'}
    ],
    newPostText: '',
    profile: null,
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: 5, message: state.newPostText}]
            };

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText

            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile

            };
        }
        default:
            return state;
    }
};
//      AC- actionCreator
export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) =>
{
    usersAPI.getProfile(userId).then(response => {
       dispatch(setUserProfile(response.data));
    });
};

export default profilePageReducer;