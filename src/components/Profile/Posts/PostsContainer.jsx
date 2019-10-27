import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducer/profilePageReducer";
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
            dispatch(addPostActionCreator());
        }

    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;