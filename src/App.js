import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route exact path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                </div>
            </div>
    );

};


export default App;
