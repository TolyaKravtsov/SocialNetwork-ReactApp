import React from "react";
import textareaModule from "./TextareaForm.module.css"

export const FormControl = ({input, meta, ...props}) => {              //get props withOut input and meta
    const hasError = meta.touched && meta.error;
    return (
        <div className={textareaModule.textareaForm + " " + (hasError ? textareaModule.error : "")}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>

    )
};

export const Textarea = (props) => {
   const {input, meta, ...RestProps} = props;
    return <FormControl {...props}><textarea {...input} {...RestProps}/></FormControl>
};

export const Input = (props) => {
    const {input, meta, ...RestProps} = props;
    return <FormControl {...props}><input {...input} {...RestProps}/></FormControl>
};