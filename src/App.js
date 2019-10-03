import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path="/Dialogs"
                           component={Dialogs}/> {/* Route wait Url /Dialogs,and turn component Dialogs*/}
                    <Route exact path="/Profile" component={Profile}/>
                </div>
            </div>
        </BrowserRouter>


    );

};


export default App;
