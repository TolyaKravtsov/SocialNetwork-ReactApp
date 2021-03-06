import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div>Main content
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
};

export default Profile;