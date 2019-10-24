import React from 'react';
import {updateNewPostTextActionCreator} from "../../../redux/reducer/profilePageReducer";
import {addMessageActionCreator} from "../../../redux/reducer/dialogsPageReducer";
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {

    return {
        updateNewPostTextActionCreator: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addMessageActionCreator());
        }

    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;