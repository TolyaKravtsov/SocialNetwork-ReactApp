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
    let newMessageElement = React.createRef();   //create link

    let addPost = () => {
        let text = newMessageElement.current.value;
        alert(text)
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
                <textarea ref={newMessageElement} name="Add Post" id="" cols="30" rows="3">Post</textarea>
                <button onClick={addPost}>click</button>
            </div>
        </div>
    )
};

export default Dialogs;
