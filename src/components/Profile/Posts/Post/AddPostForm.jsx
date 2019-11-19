import React from "react";
import {Field} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"post"} name={"newMessageBody"} component={"textarea"}/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>

    )
};

export default AddPostForm;