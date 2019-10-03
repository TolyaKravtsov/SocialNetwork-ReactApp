import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


let postData = [
    {id: 1, message: 'how are you'},
    {id: 2, message: 'how do you do'}


];

const Profile = (props) => {
    return (

        <div>Main content
            <ProfileInfo/>
            <Posts message={postData[0].message}/>
            <Posts message={postData[1].message}/>
        </div>
    );
};

export default Profile;

