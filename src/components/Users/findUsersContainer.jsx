import React from "react";
import {
  follow,
  preloaderTurned,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  unfollow
} from "../../redux/reducer/findUsersPageReducer";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./FindUsers";
import PreloaderComponent from "../../common/preloader";

class usersContainer extends React.Component {
  componentDidMount() {
    this.props.preloaderTurned(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
          }
      )
      .then(response => {
        this.props.preloaderTurned(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.preloaderTurned(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
          }
      )
      .then(response => {
        this.props.preloaderTurned(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.inProgress ? <PreloaderComponent /> : null}
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
