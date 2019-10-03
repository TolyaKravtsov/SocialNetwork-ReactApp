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

const Dialogs = (props) => {
    return (
        <div className={dialogs.dialogs}>


            <div className={dialogs.dialogsItem}>

                <DialogItem name="Tolya" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Igor" id="3"/>
                <DialogItem name="Petya" id="4"/>

            </div>


            <div className={dialogs.messages}>
                <Message message="Hello"/>
                <Message message="How are you"/>
                <Message message="What's app"/>
            </div>
        </div>
    )
};

export default Dialogs;
