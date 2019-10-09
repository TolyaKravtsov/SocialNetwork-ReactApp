import React from 'react';
import Post from "./Post/Post";


const Posts = (props) => {
    let postElement = props.postData.map((post) => {
            return (
                <Post message={post.message}/>
            )
        }
    );
    let newPostElement = React.createRef();   //create link

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)

    };
    return (
        <div>
            <div>
                {postElement}
            </div>
            <div>
                <textarea ref={newPostElement} name="Add Post" id="" cols="30" rows="3">Post</textarea>
                <button onClick={addPost}>click</button>
            </div>
        </div>
    );
};

export default Posts;