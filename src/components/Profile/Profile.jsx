import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";



const Profile = (props) => {
    return (

        <div>Main content
            <ProfileInfo/>
            <Posts postData={props.state.postData} addPost={props.addPost} />
        </div>
    );
};

export default Profile;