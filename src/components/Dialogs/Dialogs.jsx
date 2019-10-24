import React from 'react';
import dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map((dialog) => {
            return <DialogItem name={dialog.name} id={dialog.id}/>

        }
    );

    let messagesElement = props.messageData.map((message) => {
            return (
                <Message message={message.message}/>
            )
        }
    );


    let onMessageChanged = () => {
        let body = newMessageElement.current.value;
        props.updateNewMessage(body);
    };

    let newMessageElement = React.createRef();   //create link

    let addMessage = () => {
        props.sendMessage();
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
                <textarea onChange={onMessageChanged} ref={newMessageElement} name="Add Message" id="" cols="30"
                          rows="3" value={props.newMessageText}/>
                <button onClick={addMessage}>click</button>
            </div>
        </div>
    )
};

export default Dialogs;