const ADD_POST = ' ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'how are you'},
        {id: 2, message: 'how do you do'},
        {id: 3, message: 'Люблю Сашеньку'}
    ],
    newPostText: ''
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
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }

};


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    };
};
export default profilePageReducer;