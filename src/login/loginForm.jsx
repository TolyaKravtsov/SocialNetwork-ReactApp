import React from "react";
import {Field} from "redux-form";
import {Input} from "../common/formsControl/TextareaForm";
import {maxLengthCreator, requiredField} from "../common/validators";

const MaxLength15 = maxLengthCreator(15);

const  LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={Input}  validate={[requiredField, MaxLength15]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}  validate={[requiredField, MaxLength15]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}  validate={[requiredField, MaxLength15]}/> remember me
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </form>
    )
};

export default LoginForm;