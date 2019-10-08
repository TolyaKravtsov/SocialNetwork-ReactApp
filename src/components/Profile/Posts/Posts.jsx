import React from 'react';
import Post from "./Post/Post";


const Posts = (props) => {
    let postElement = props.postData.map((post) => {
            return (
                <Post message={post.message}/>
            )
        }
    );
    return (
        <div>
            {postElement}
        </div>
    );
};

export default Posts;