let rerenderEntireTree = () => {
    console.log('priv');
};

let state = {

    profilePage: {
        postData: [
            {id: 1, message: 'how are you'},
            {id: 2, message: 'how do you do'},
            {id: 3, message: 'Люблю Сашеньку'}
        ],
        newPostText: 'Enter something'
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


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
};


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;

};
export default state