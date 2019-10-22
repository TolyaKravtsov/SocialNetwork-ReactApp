import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/reducer/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onMessageChanged = (body) => {
        props.store.dispatch(updateMessageTextActionCreator(body));

    };

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    return (
        <Dialogs updateNewMessage={onMessageChanged} sendMessage={addMessage} state={state}/>
    )
};

export default DialogsContainer;
