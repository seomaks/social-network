import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.proImg}
             src='https://tambotravel.com/wp-content/uploads/Mancora-Peru.jpg'
             alt=''/>
      </div>
      <div className={classes.descriptionBlock}>Ava and description</div>
    </div>
  )
}

export default ProfileInfo
