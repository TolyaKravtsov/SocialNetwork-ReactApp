import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return (

        <div>Main content
            <ProfileInfo/>
            <Posts postData={props.profilePage.postData}
                   addPost={props.addPost}
                   newPostText={props.profilePage.newPostText}
                   updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;