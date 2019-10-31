import React from 'react';
import Post from "./Post/Post";

const Posts = (props) => {
    let postElement = props.postData.map((post) => {
            return (
                <Post message={post.message} key={post.id}/>
            )
        }
    );

    let onPostChanged = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextAC(text)
    };

    let newPostElement = React.createRef();   //create link

    let onAddPost = () => {
        props.addPost();
    };
    return (
        <div>
            <div>
                {postElement}
            </div>
            <div>
                <textarea onChange={onPostChanged} ref={newPostElement} name="Add Post" id="" cols="30"
                          rows="3" value={props.newPostText}/>
                <button onClick={onAddPost}>add</button>
            </div>
        </div>
    );
};

export default Posts;