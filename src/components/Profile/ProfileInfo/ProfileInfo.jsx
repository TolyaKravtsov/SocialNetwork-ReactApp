import React from "react";
import profileInfo from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div><img src="https://clck.ru/JEiYu" alt=""/></div>
            <div className={profileInfo.description}>ava+description</div>
        </div>
    )
};


export default ProfileInfo;