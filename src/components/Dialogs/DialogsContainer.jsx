import React from 'react';
import {updateMessageAC, addMessageAC} from "../../redux/reducer/dialogsPageReducer";
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
            dispatch(updateMessageAC(body));
        },
        sendMessage: () => {
            dispatch(addMessageAC());
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);

