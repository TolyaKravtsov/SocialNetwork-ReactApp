import React from 'react';
import profile from "./Profile.module.css"
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (

        <div className={profile.content}>Main content


            <div><img src="https://clck.ru/JEiYu" alt=""/></div>
            <div>ava+description</div>
            <Posts name='first post' age={30}/>


            <Posts name='second post' age={30}/>


        </div>
    );
};

export default Profile;

