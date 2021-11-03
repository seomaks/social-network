import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile



/*import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/redux-store";

type propsType = {
  dispatch: (action: ActionsTypes) => void
  store: StoreType
}

const Profile = (props: propsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer posts={store.getState().profilePage.posts}
                        messageForNewPost={store.getState().profilePage.messageForNewPost}
                        store={props.store}
      />
    </div>
  )
}

export default Profile*/
