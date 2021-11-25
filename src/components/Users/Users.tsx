import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UserType>
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  toggleFollowingProgress: (isFetching: boolean, userID: number) => void
  followingInProgress: number[]
}

export let Users = (props: PropsType) => {

  let pagesCont = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCont; i++) {
    //  pages.push(i)
    if (pages.length < 20) {
      pages.push(i);
    }
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span
          className={props.currentPage === p ? classes.selectedPage : ""}
          onClick={(e) => {
            props.onPageChanged(p);
          }}
        >{p}</span>
      })}
    </div>
    {props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + u.id}>
        <img src={u.photos.small != null ? u.photos.small : userPhoto}
             className={classes.userPhoto} alt={'user'}/>
            </NavLink>
      </div>
      <div>
        {u.followed
          ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
            props.toggleFollowingProgress(true, u.id)
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
              withCredentials: true,
              headers: {"API-KEY": "0c074aaa-aceb-492d-a73f-9ca4f6d5a703"}
            })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.unfollow(u.id)
                }
                props.toggleFollowingProgress(false, u.id)
              });
          }}>Unfollow</button>
          : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
            props.toggleFollowingProgress(true, u.id)
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
              withCredentials: true,
              headers: {"API-KEY": "0c074aaa-aceb-492d-a73f-9ca4f6d5a703"}
            })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.follow(u.id)
                }
                props.toggleFollowingProgress(false, u.id)
              });
          }}>Follow</button>}
      </div></span>
      <span>
<span>
  <div>{u.name}</div>
  <div>{u.status}</div>
</span>
<span>
  <div>{"u.location.country"}</div><div>{"u.location.city"}</div>
</span>
      </span>
    </div>)}
  </div>
}