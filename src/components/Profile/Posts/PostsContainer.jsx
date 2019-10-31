import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducer/profilePageReducer";
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
        updateNewPostTextAC: (text) => {
            let action = updateNewPostTextAC(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC());
        }

    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;