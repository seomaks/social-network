import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {Redirect} from "react-router-dom";

type PropsType = {
  isAuth: boolean
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
}

const Profile = (props: PropsType) => {
debugger
  if (!props.isAuth) return <Redirect to={"/Login"}/>
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile