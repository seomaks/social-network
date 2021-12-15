import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

type PropsType = {
  profile: ProfileType | null
}

const ProfileInfo = (props: PropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
 {/*     <div>
        <img className={classes.proImg}
             src='https://tambotravel.com/wp-content/uploads/Mancora-Peru.jpg'
             alt=''/>
      </div>*/}
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt={""}/>
        <ProfileStatus status={"Hello there!"}/>
        <div>Full name: {props.profile.fullName}</div>
        <div>Looking for a job: {props.profile.lookingForAJob}</div>
        {props.profile.lookingForAJobDescription}
        <ul>My contacts:
          <li>VK: {props.profile.contacts.vk}</li>
          <li>GitHub: {props.profile.contacts.github}</li>
          <li>Facebook: {props.profile.contacts.facebook}</li>
          <li>Twitter: {props.profile.contacts.twitter}</li>
          <li>WebSite: {props.profile.contacts.website}</li>
          <li>Instagram: {props.profile.contacts.instagram}</li>
          <li>MainLink: {props.profile.contacts.mainLink}</li>
          <li>YouTube: {props.profile.contacts.youtube}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo