import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profilePageReducer from "./reducer/profilePageReducer";
import dialogsPageReducer from "./reducer/dialogsPageReducer";
import findUsersPageReducer from "./reducer/findUsersPageReducer";
import authReducer from "./reducer/authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./reducer/app-reducer";

let AllReducers = combineReducers({
    auth: authReducer,
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    findUsersPage: findUsersPageReducer,
    form: formReducer,
    app: appReducer,
});
// Расширения Redux для Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AllReducers,composeEnhancers(applyMiddleware(thunkMiddleware)));


/*let store = createStore(AllReducers, applyMiddleware(thunkMiddleware));*/

window.store = store;

export default store;
