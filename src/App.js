import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/Users/findUsersContainer.jsx";
import ProfileContainer from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/reducer/app-reducer";
import PreloaderComponent from "./common/preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <PreloaderComponent/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>

                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>

                    <Route path="/users"
                           render={() => <FindUsersContainer/>}/>

                    <Route path="/login"
                           render={() => <Login/>}/>


                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
