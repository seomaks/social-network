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
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile = (props: PropsType) => {
  if (!props.isAuth) return <Redirect to={"/login"}/>
  return (
    <div>
      <ProfileInfo isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
                   profile={props.profile}
                   status={props.status}
                   saveProfile={props.saveProfile}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile
