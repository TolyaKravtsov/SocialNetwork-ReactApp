import React from 'react';
import dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map((dialog) => {
            return <DialogItem name={dialog.name} id={dialog.id}/>

        }
    );

    let messagesElement = props.state.messageData.map((message) => {
            return (
                <Message message={message.message}/>
            )
        }
    );

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
