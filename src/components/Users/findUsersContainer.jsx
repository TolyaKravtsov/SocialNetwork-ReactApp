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
import {withAuthRedirect} from "../../hoc/authRedirect";

class usersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);

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
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        inProgress: state.findUsersPage.inProgress,
        followingInProgress: state.findUsersPage.followingInProgress
    };
};

export default withAuthRedirect(connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        preloaderTurned,
        followingInProgress,
        getUsersThunkCreator,
    }
)(usersContainer));
