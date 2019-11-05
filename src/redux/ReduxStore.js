import { combineReducers, createStore } from "redux";
import profilePageReducer from "./reducer/profilePageReducer";
import dialogsPageReducer from "./reducer/dialogsPageReducer";
import findUsersPageReducer from "./reducer/findUsersPageReducer";
import authReducer from "./reducer/authReducer";

let AllReducers = combineReducers({
  auth: authReducer,
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  findUsersPage: findUsersPageReducer
});

let store = createStore(AllReducers);

window.store = store;

export default store;
