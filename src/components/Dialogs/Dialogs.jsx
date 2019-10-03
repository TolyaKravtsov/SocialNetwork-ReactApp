import React from 'react';
import dialogs from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItem}>
                <div className={dialogs.dialog + ' ' + dialogs.active}>Tolya</div>
                <div className={dialogs.dialog}>Pasha</div>
                <div className={dialogs.dialog}>Andrey</div>
                <div className={dialogs.dialog}>Igor</div>
                <div className={dialogs.dialog}>Kirill</div>
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
