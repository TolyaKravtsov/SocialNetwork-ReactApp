import React from 'react';
import Post from "./Post/Post";

let postData = [
    {id: 1, message: 'how are you'},
    {id: 2, message: 'how do you do'}
];


let postElement = postData.map((post) => {
        return (
            <Post message={post.message}/>
        )
    }
);

const Posts = (props) => {
    return (

        <div>
            {postElement}
        </div>
    );
};

export default Posts;