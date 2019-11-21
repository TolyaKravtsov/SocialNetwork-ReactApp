export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is  required"
};


export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > 30) return `Maxlength is ${maxLength}symbols `;
    return undefined;
};
