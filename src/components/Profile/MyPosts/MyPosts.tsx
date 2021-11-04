import React, {ChangeEvent} from "react";
import classes from './Myposts.module.css'
import Post from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: PostsPropsType) => {
  const postsElements = props.profilePage.posts.map(p => <Post
    likesCount={p.likesCount}
    message={p.message}
    key={p.id}
  />)


  const addPost = () => {
    props.addPost(props.profilePage.messageForNewPost);
  }

  const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    props.changeNewText(text)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={props.profilePage.messageForNewPost}
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