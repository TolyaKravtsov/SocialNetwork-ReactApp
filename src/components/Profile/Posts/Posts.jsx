import React from 'react';
import posts from './Posts.module.css'

const Posts = (props) => {
    return (

        <div className={posts.postBLock}>
            {props.message}
        </div>

    );
};

export default Posts;