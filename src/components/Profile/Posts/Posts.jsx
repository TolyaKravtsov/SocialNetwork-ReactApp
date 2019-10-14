import React from 'react';
import Post from "./Post/Post";


const Posts = (props) => {
    let postElement = props.postData.map((post) => {
            return (
                <Post message={post.message}/>
            )
        }
    );

    let onPostChanged = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        console.log(text);
    };

    let newPostElement = React.createRef();   //create link

    let addPost = () => {
        props.addPost();
    };


    return (
        <div>
            <div>
                {postElement}
            </div>
            <div>
                <textarea onChange={onPostChanged} ref={newPostElement} name="Add Post" id="" cols="30"
                          rows="3">{props.newPostText}</textarea>
                <button onClick={addPost}>add</button>
            </div>
        </div>
    );
};

export default Posts;