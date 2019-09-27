import React from 'react';
import profile from "./Profile.module.css"
import Posts from "./Posts/Posts";

const Profile = () => {
    return (

        <div className={profile.content}>Main content


            <div><img src="https://clck.ru/JEiYu" alt=""/></div>
            <div>ava+description</div>
            <Posts/>
            <Posts/>
            <Posts/>

        </div>
    );
};

export default Profile;

