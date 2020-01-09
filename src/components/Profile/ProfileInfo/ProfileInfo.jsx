import React from "react";
import profileInfo from "./ProfileInfo.module.css";
import PreloaderComponent from "../../../common/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultAvatar from "../../../defaultAvatar.jpg"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <PreloaderComponent/>
    }

    const selectedPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            {/*  <div><img className={profileInfo.backPage} src="https://clck.ru/JEiYu" alt=""/></div>*/}
            <img className={profileInfo.avatar} src={profile.photos.large || defaultAvatar} alt="ava"/>
            {isOwner && <input type={"file"} onChange={selectedPhoto}/>}
            <div><span>{profile.aboutMe}</span></div>
            <div>{profile.contacts.vk}</div>
            <div className={profileInfo.description}>ava+description</div>
            <div>статус:</div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
};


export default ProfileInfo;