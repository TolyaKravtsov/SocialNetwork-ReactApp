let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: 'how are you'},
                {id: 2, message: 'how do you do'},
                {id: 3, message: 'Люблю Сашеньку'}
            ],
            newPostText:
                'Enter something'
        }
        ,
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Petya'},
            ],
            messageData:
                [
                    {id: 1, message: 'oy'},
                    {id: 2, message: 'Hi'},
                    {id: 3, message: 'I Tolya'},
                    {id: 4, message: 'How are you'},
                ],
        }
        ,
        sideBarPage: {
            dialogsData: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Igor'},
            ],
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')

    },
    addPost() {
        let newPost = {
            id: 5,
                message: this._state.profilePage.newPostText
        };
        this._state.profilePage.postData.push(newPost);
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },
};

export default store;
