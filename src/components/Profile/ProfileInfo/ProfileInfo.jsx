import React from "react";
import profileInfo from "./ProfileInfo.module.css";
import PreloaderComponent from "../../../common/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreloaderComponent/>
    }
    return (
        <div>
            {/*  <div><img className={profileInfo.backPage} src="https://clck.ru/JEiYu" alt=""/></div>*/}
            <img className={profileInfo.avatar} src={props.profile.photos.large} alt="ava"/>
            <div><span>{props.profile.aboutMe}</span></div>
            <div>{props.profile.contacts.vk}</div>
            <div className={profileInfo.description}>ava+description</div>
            <div>статус:</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
};


export default ProfileInfo;