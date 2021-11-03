import {
  addPostAC,
  changeNewTextAC,
  InitialStateType
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStatePropsType = {
/*  posts: InitialStateType
  messageForNewPost: string*/
  profilePage: InitialStateType
}

type mapDispatchPropsType = {
  changeNewText:(text: string)=> void
    addPost: (messageForNewPost: string)=> void
}

export type PostsPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
/*    posts: state.profilePage.posts,
    messageForNewPost: state.profilePage.messageForNewPost*/
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
  return {
    changeNewText: (text: string) => {
      const action = changeNewTextAC(text)
      dispatch(action)
    },
    addPost: (messageForNewPost: string) => {
      dispatch(addPostAC(messageForNewPost))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
