import React from "react";
import {
    follow,
    followingInProgress,
    getUsersThunkCreator,
    preloaderTurned,
    setCurrentPage,
    unfollow
} from "../../redux/reducer/findUsersPageReducer";
import {connect} from "react-redux";
import Users from "./FindUsers";
import PreloaderComponent from "../../common/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getInProgress,
    getPageSizeSelector,
    getTotalUsersCount, getUsers,
    getUsersSelector
} from "../../redux/reducer/users-selectors";

class usersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(pageNumber, pageSize);

    };

    render() {
        return (
            <>
                {this.props.inProgress ? <PreloaderComponent/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

let mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        inProgress: getInProgress(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(
        mapStateToProps,
        {follow, unfollow, setCurrentPage, preloaderTurned, followingInProgress, getUsersThunkCreator,})
)(usersContainer)