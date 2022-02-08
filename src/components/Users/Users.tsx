import React from "react";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type PropsType = {
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UserType>
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  followingInProgress: number[]
}

export let Users = (props: PropsType) => {
  return <div>
    <Paginator onPageChanged={props.onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}/>
   <div>
      {props.users.map(u => <User user={u}
                                  key={u.id}
                                  followingInProgress={props.followingInProgress}
                                  follow={props.follow}
                                  unfollow={props.unfollow}
      />)
      }
    </div>
  </div>
}