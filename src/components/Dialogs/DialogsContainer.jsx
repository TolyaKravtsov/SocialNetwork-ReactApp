import React from 'react';
import {addMessageAC, updateMessageAC} from "../../redux/reducer/dialogsPageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/authRedirect";
import Dialogs from "./Dialogs";

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

let authRedirectComponent = withAuthRedirect(Dialogs);

export  default connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

