import React from "react";
import {followAC, setUsersAC, unFollowAC} from "../../redux/reducer/findUsersPageReducer";
import Users from "./findUsers";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);




