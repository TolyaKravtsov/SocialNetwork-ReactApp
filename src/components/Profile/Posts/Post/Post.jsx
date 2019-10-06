import React from 'react';
import posts from "./Posts.module.css"

const Post = (props) => {
    return (

        <div className={posts.postBLock}>
            {props.message}
        </div>

    );
};

export default Post;


