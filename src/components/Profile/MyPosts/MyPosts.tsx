import React, {ChangeEvent} from "react";
import classes from './Myposts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type propsType = {
  messageForNewPost: string
  posts: PostType[]
  addPost: (text: string) => void
  changeNewTextCallback: (newText: string) => void
}

const MyPosts = (props: propsType) => {
  const postsElements = props.posts.map((p: any) => <Post
    likesCount={p.likesCount}
    message={p.message}/>)

  const addPost = () => {
    props.addPost(props.messageForNewPost)
  }

  const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewTextCallback(e.currentTarget.value)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={props.messageForNewPost}
                    onChange={newTextChangeHandler}>
          </textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts