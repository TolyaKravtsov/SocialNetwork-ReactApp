import dialogsPageReducer from "./reducer/dialogsPageReducer";
import profilePageReducer from "./reducer/profilePageReducer";

const ADD_POST = ' ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: 'how are you'},
                {id: 2, message: 'how do you do'},
                {id: 3, message: 'Люблю Сашеньку'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Petya'},
            ],
            messageData: [
                {id: 1, message: 'oy'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'I Tolya'},
                {id: 4, message: 'How are you'},
            ],
            newMessageText: ''
        },
        sideBarPage: {
            dialogsData: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Igor'},
            ],
        }
    },
    _callSubscriber() {
        console.log('state changed')            //rerenderEntireTree

    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {       //{type:'ADD-POST'}
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }

};
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    };
};


export const updateMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message
    }
};

export default store;
