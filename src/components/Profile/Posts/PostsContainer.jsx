import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducer/profilePageReducer";
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState();
    let onPostChanged = (text) => {
        let action = updateNewPostTextActionCreator(text);
        console.log(text);
        props.store.dispatch(action);
    };

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    return (
        <Posts updateNewPostTextActionCreator={onPostChanged} addPost={addPost}
               postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
    );
};

export default PostsContainer;