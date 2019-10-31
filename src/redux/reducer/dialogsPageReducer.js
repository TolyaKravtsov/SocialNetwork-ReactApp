const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, {id: 10, message: state.newMessageText}]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };

        default:
            return state;
    }
};

//      AC- actionCreator
export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateMessageAC = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});

export default dialogsPageReducer;
