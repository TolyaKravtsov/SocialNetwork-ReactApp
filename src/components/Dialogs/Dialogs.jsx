import React from 'react';
import dialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItem}>
                <div className={dialogs.dialog + ' ' + dialogs.active}>
                    <NavLink to="/Dialogs/1"> Tolya</NavLink>
                </div>

                <div className={dialogs.dialog}>
                    <NavLink to="/Dialogs/2">Pasha</NavLink>
                </div>

                <div className={dialogs.dialog}>
                    <NavLink to="/Dialogs/3">Andrey</NavLink>
                </div>

                <div className={dialogs.dialog}>
                    <NavLink to="/Dialogs/4">Igor</NavLink>
                </div>

                <div className={dialogs.dialog}>
                    <NavLink to="/Dialogs/5">Petya</NavLink>
                </div>
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>Hi</div>
                <div className={dialogs.message}>How are you</div>
                <div className={dialogs.message}>you</div>
            </div>
        </div>
    )
};

export default Dialogs;
