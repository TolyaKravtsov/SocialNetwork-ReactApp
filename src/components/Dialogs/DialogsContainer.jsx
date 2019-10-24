import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/reducer/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.profilePage.newMessageText,
        messageData: state.dialogsPage.messageData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch(updateMessageTextActionCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }

    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
debugger;
export default DialogsContainer;
