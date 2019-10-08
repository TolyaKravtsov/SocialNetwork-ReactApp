import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";
import {BrowserRouter as Router} from "react-router-dom";

const App = (props) => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route exact path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                </div>
            </div>
        </Router>


    );

};


export default App;
