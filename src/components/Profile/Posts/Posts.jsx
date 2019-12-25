import React from 'react';
import Post from "./Post/Post";
import AddPostForm from "./Post/AddPostForm";
import {reduxForm} from "redux-form";

const Posts = React.memo(props => {
    let postElement = props.postData.map((post) => {
            return (
                <Post message={post.message} key={post.id}/>
            )
        }
    );

    const addNewPost = (values) => {
        props.addPost(values.newMessageBody)
    };

    const AddPostFormRedux = reduxForm({form: "addPostForm"})(AddPostForm);


    return (
        <div>
            <div>
                {postElement}
            </div>
            <AddPostFormRedux onSubmit={addNewPost}/>
        </div>
    );
});

export default Posts;