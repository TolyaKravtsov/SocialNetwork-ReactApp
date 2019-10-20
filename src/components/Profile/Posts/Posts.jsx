import React from 'react';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducer/profilePageReducer";

const Posts = (props) => {
    let postElement = props.postData.map((post) => {
            return (
                <Post message={post.message}/>
            )
        }
    );

    let onPostChanged = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        console.log(text);
        props.dispatch(action);
    };

    let newPostElement = React.createRef();   //create link

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    return (
        <div>
            <div>
                {postElement}
            </div>
            <div>
                <textarea onChange={onPostChanged} ref={newPostElement} name="Add Post" id="" cols="30"
                          rows="3" value={props.newPostText}/>
                <button onClick={addPost}>add</button>
            </div>
        </div>
    );
};

export default Posts;