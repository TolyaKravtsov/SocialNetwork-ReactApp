import React from "react";
import {Field} from "redux-form";

const DialogsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"message"} name="newMessageBody" component={"textarea"}/>
            </div>
            <div>
                <button>click</button>
            </div>

        </form>

    )
};

export default DialogsFormRedux;