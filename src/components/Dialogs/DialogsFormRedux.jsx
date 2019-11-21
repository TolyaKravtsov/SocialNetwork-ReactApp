import React from "react";
import {Field} from "redux-form";
import {Textarea} from "../../common/formsControl/TextareaForm";
import {maxLengthCreator, requiredField} from "../../common/validators";

const MaxLength100 = maxLengthCreator(100);

const DialogsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"message"} name="newMessageBody" component={Textarea}
                       validate={[requiredField, MaxLength100]}/>
            </div>
            <div>
                <button>click</button>
            </div>

        </form>

    )
};

export default DialogsFormRedux;