import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


let postData = [
    {id: 1, message: 'how are you'},
    {id: 2, message: 'how do you do'}
];


let postElement = postData.map((post) => {
        return (
            <Posts message={post.message}/>
        )
    }
);

const Profile = (props) => {
    return (

        <div>Main content
            <ProfileInfo/>
            {postElement}
        </div>
    );
};

export default Profile;

