import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <Router>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>,
        </Router>,
        document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();