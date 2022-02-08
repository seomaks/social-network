import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
  user: UserType
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  followingInProgress: number[]
}

export let User = ({user, follow, unfollow, followingInProgress}: PropsType) => {
  return (
     <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
        <img src={user.photos.small != null ? user.photos.small : userPhoto}
             className={classes.userPhoto} alt={'user'}/>
            </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      unfollow(user.id)
                    }}>Unfollow</button>
          : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      follow(user.id)
                    }}>Follow</button>}
      </div></span>
      <span>
<span>
  <div>{user.name}</div>
  <div>{user.status}</div>
</span>
<span>
  <div>{"user.location.country"}</div><div>{"user.location.city"}</div>
</span>
      </span>
    </div>)
}