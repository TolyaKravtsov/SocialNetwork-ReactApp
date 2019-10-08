import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, message: 'how are you'},
    {id: 2, message: 'how do you do'}
];

let dialogsData = [
    {id: 1, name: 'Tolya'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Petya'},
];

let messageData = [
    {id: 1, message: 'oy'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'I Tolya'},
    {id: 4, message: 'How are you'},
];

ReactDOM.render(<App postData={postData} messageData={messageData} dialogsData={dialogsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();