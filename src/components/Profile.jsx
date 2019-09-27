import React from 'react';
import profile from "./Profile.module.css"

const Profile = () => {
    return (

        <div className={profile.content}>Main content


            <div><img src="https://clck.ru/JEiYu" alt=""/></div>
            <div>ava+description</div>
            <div>my post</div>
            <div className={profile.item}>new post</div>
            <div className={profile.item}>my post</div>
            <div className={profile.item}>my post</div>
        </div>
    );
};

export default Profile;

