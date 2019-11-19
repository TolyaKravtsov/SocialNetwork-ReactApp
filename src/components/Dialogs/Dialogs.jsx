import React from 'react';
import dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import DialogsFormRedux from "./DialogsFormRedux";
import {reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map((dialog) => {
            return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>

        }
    );

    let messagesElement = props.messageData.map((message) => {
            return (
                <Message message={message.message} key={message.id}/>
            )
        }
    );

    if (props.isAuth === false) return <Redirect to={'/login'}/>;

    const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(DialogsFormRedux);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={dialogs.dialogs}>
            <div>
                {dialogsElement}
            </div>

            <div>
                {messagesElement}
            </div>
            <div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;