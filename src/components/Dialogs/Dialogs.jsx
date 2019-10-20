import React from 'react';
import dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/reducer/dialogsPageReducer";


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


    let onMessageChanged = () => {
        let message = newMessageElement.current.value;
        let action = updateMessageTextActionCreator(message);
        props.dispatch(action);
        console.log(message);

    };

    let newMessageElement = React.createRef();   //create link

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
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
