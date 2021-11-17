import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {InitialStateType} from "../../redux/usersReducer";

type PropsType = {
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  usersPage: InitialStateType
  follow: (userID: number) => void
  unfollow: (userID: number) => void
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
    {props.usersPage.users.map(u => <div key={u.id}>
      <span>
        <div>
        <img src={u.photos.small != null ? u.photos.small : userPhoto}
             className={classes.userPhoto} alt={'user'}/>
      </div>
      <div>
        {u.followed
          ? <button onClick={() => {
            props.unfollow(u.id)
          }}>Unfollow</button>
          : <button onClick={() => {
            props.follow(u.id)
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