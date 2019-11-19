import React from 'react';
import {addMessageAC,} from "../../redux/reducer/dialogsPageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/authRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.profilePage.newMessageText,
        messageData: state.dialogsPage.messageData,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageAC(newMessageBody));
        }

    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),       // //move withAuthRedirect to connect
    withAuthRedirect,           //move to withAuthRedirect
)
(Dialogs);          //get dialogs

