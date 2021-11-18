import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";

type PropsType = {
  profile: ProfileType | null
}

const ProfileInfo = (props: PropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img className={classes.proImg}
             src='https://tambotravel.com/wp-content/uploads/Mancora-Peru.jpg'
             alt=''/>
      </div>
      <img src={props.profile.photos.large} alt={""}/>
      <div className={classes.descriptionBlock}>Ava and description</div>
    </div>
  )
}

export default ProfileInfo