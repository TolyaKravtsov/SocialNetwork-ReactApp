import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/reducer/authReducer";


class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);