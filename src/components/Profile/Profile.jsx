import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return (

        <div>Main content
            <ProfileInfo/>
            <Posts message='first post'/>
            <Posts name='second post'/>
        </div>
    );
};

export default Profile;

