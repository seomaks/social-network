import React from "react";
import classes from './Myposts.module.css'
import Post from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PostDataType = {
  newPostText: string
}

const MyPosts = (props: PostsPropsType) => {
  const postsElements = props.profilePage.posts.map(p => <Post
    likesCount={p.likesCount}
    message={p.message}
    key={p.id}
  />)

  let AddNewPostForm: React.FC<InjectedFormProps<PostDataType>> = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newPostText" component="textarea"/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  }

 let AddNewPostFormRedux = reduxForm<PostDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

  const onAddPost = (values: {newPostText: string}) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts