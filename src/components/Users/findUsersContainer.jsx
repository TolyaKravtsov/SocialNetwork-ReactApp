import React from "react";
import {
    follow,
    preloaderTurned,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    unfollow
} from "../../redux/reducer/findUsersPageReducer";
import {connect} from "react-redux";
import Users from "./FindUsers";
import PreloaderComponent from "../../common/preloader";
import {getUsers, usersAPI} from "../../api/api";

class usersContainer extends React.Component {
    componentDidMount() {
        this.props.preloaderTurned(true);

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.preloaderTurned(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    onPageChanged = pageNumber => {
        this.props.preloaderTurned(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.preloaderTurned(false);
                this.props.setUsers(data.items);
            });
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
        inProgress: state.findUsersPage.inProgress
    };
};

export default connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        preloaderTurned
    }
)(usersContainer);
