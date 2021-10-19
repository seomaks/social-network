import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeNewText, PostType} from "../../redux/state";

type propsType = {
  messageForNewPost: string
  posts: PostType[]
  addPost: (text: string) => void
}

const Profile = (props: propsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}
               addPost={props.addPost}
               messageForNewPost={props.messageForNewPost}
               changeNewTextCallback={changeNewText}
      />
    </div>
  )
}

export default Profile
