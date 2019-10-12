import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        postData: [
            {id: 1, message: 'how are you'},
            {id: 2, message: 'how do you do'},
            {id: 3, message: 'Люблю Сашеньку'}
        ]
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
    },
    sideBarPage: {
        dialogsData: [
            {id: 1, name: 'Tolya'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Igor'},
        ],
    }
};


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
};
export default state