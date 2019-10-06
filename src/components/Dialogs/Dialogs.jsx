import React from 'react';
import dialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/ +props.id";
    return (
        <div className={dialogs.dialog + ' ' + dialogs.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={dialogs.message}>{props.message}</div>
    )

};

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
            <div className={dialogs.dialogsItem}>
                {dialogsElement}
            </div>

            <div className={dialogs.messages}>
                {messagesElement}
            </div>
        </div>
    )
};

export default Dialogs;
