import React from "react";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../redux/reducer/findUsersPageReducer";
import Users from "./findUsers";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage
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
        setCurrentPage:(pageNumber) =>{
                dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) =>{
                dispatch(setUsersTotalCountAC(totalCount))
        }


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);




