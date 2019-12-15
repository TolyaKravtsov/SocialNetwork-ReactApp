import React from "react";
import LoginForm from "./loginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../redux/reducer/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {loginUser})(Login);