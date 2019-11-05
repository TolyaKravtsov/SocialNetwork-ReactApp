import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/Users/findUsersContainer.jsx";
import ProfileContainer from "./components/Profile/profileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>

                <Route path="/profile"
                       render={() => <ProfileContainer/>}/>

                <Route path="/users"
                       render={() => <FindUsersContainer/>}/>
            </div>
        </div>
    );

};

export default App;
