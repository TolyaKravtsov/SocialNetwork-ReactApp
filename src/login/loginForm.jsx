import React from "react";
import {Field} from "redux-form";
import {Input} from "../common/formsControl/TextareaForm";
import {maxLengthCreator, requiredField} from "../common/validators";
import TextareaForm from "../common/formsControl/TextareaForm.module.css"

const MaxLength15 = maxLengthCreator(15);

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField, MaxLength15]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[requiredField, MaxLength15]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}
                       validate={[requiredField, MaxLength15]}/> remember me
            </div>
            {error && <div className={TextareaForm.summaryError}>{error}</div>}
            <div>
                <button>Sign Up</button>
            </div>
        </form>
    )
};

export default LoginForm;