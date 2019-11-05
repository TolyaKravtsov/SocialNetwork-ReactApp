import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/Users/findUsersContainer.jsx";
import ProfileContainer from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
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
            </div>
        </div>
    );

};

export default App;
