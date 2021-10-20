import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/state";

type propsType = {
  messageForNewPost: string
  posts: PostType[]
  dispatch:(action: ActionsTypes)=>void
}

const Profile = (props: propsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}
               dispatch={props.dispatch}
               messageForNewPost={props.messageForNewPost}
      />
    </div>
  )
}

export default Profile
