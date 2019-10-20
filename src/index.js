import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/ReduxStore";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />,
        </Router>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();