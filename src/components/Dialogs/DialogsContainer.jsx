import React from 'react';
import {addMessageAC, updateMessageAC} from "../../redux/reducer/dialogsPageReducer";
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
        updateNewMessage: (body) => {
            dispatch(updateMessageAC(body));
        },
        sendMessage: () => {
            dispatch(addMessageAC());
        }

    }
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps),       // //move withAuthRedirect to connect
    withAuthRedirect,           //move to withAuthRedirect
)
(Dialogs);          //get dialogs

