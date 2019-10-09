import React from 'react';
import posts from "./Posts.module.css"

const Post = (props) => {
    return (

        <div className={posts.postBLock}>
            <img className={posts.img} src="https://clck.ru/JS8HD" alt="avatar"/>
            {props.message}
        </div>

    );
};

export default Post;


