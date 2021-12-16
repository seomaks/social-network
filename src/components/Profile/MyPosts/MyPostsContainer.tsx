import {
  addPostAC,
  InitialStateType
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStatePropsType = {
  profilePage: InitialStateType
}

type mapDispatchPropsType = {
    addPost: (messageForNewPost: string)=> void
}

export type PostsPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
