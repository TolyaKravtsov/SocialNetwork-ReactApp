import React from "react";
import {Field} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../common/validators";
import {Textarea} from "../../../../common/formsControl/TextareaForm";

const MaxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"post"} name={"newMessageBody"} component={Textarea}
                       validate={[requiredField,MaxLength10 ]}/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>

    )
};

export default AddPostForm;