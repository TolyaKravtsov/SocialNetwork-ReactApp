import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./reducer/profilePageReducer";
import dialogsPageReducer from "./reducer/dialogsPageReducer";
import findUsersPageReducer from "./reducer/findUsersPageReducer";
import authReducer from "./reducer/authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let AllReducers = combineReducers({
    auth: authReducer,
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    findUsersPage: findUsersPageReducer,
    form: formReducer,
});

let store = createStore(AllReducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
