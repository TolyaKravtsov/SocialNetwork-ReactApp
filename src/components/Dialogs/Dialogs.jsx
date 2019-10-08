import React from 'react';
import dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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


let dialogsElement = dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>

    }
);

let messagesElement = messageData.map((message) => {
        return (
            <Message message={message.message}/>
        )
    }
);


const Dialogs = (props) => {

    return (
        <div className={dialogs.dialogs}>
            <div>
                {dialogsElement}
            </div>

            <div>
                {messagesElement}
            </div>
        </div>
    )
};

export default Dialogs;
