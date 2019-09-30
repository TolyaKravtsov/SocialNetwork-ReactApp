import React from 'react';
import posts from './Posts.module.css'

const Posts = (props) => {
    return (

        <div className={posts.color}>
            <div>{props.name}</div>
            <div>{props.age}</div>

        </div>


    );
};

export default Posts;