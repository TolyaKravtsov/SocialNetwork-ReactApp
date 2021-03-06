import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/reducer/profilePageReducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5077;
            debugger;
            if (!userId) {
                this.props.history.push("/login");

            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    componentDidMount() {
        this.refreshProfile();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {
        debugger;
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
            />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.userId,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto}),
    withRouter,
    /* withAuthRedirect,*/
)(ProfileContainer)