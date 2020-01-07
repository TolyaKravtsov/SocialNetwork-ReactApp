import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/Users/findUsersContainer.jsx";
/*import ProfileContainer from "./components/Profile/profileContainer";*/
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import {initializeApp} from "./redux/reducer/app-reducer";
import PreloaderComponent from "./common/preloader";
import store from "./redux/ReduxStore";
import {lazyHoc} from "./hoc/lazyHoc";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/profileContainer'));

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
                           render={lazyHoc(DialogsContainer)}/>

                    <Route path="/profile/:userId?"
                           render={lazyHoc(ProfileContainer)}/>

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


let Connect = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


let AppContainer = (props) => {
    return <Router>
        <Provider store={store}>
            <Connect/>
        </Provider>
    </Router>
};


export default AppContainer