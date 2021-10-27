import {
  PostType, StoreType
} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


type propsType = {
  messageForNewPost: string
  posts: PostType[]
  store: StoreType
}

const MyPostsContainer = (props: propsType) => {
  const addPost = () => {
    props.store.dispatch(addPostAC(props.messageForNewPost))
  }

  const newTextChangeHandler = (text:string) => {
    const action = changeNewTextAC(text)
    props.store.dispatch(action)
  }

  return <MyPosts
    addPost={addPost}
    changeNewText={newTextChangeHandler}
    posts={props.posts}
    messageForNewPost={props.messageForNewPost}
  />
}

export default MyPostsContainer