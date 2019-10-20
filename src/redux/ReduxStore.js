import {combineReducers, createStore} from "redux";
import profilePageReducer from "./reducer/profilePageReducer";
import dialogsPageReducer from "./reducer/dialogsPageReducer";

let AllReducers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer
    });

let store = createStore(AllReducers);

export default store;