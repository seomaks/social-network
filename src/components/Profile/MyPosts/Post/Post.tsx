import React from 'react'
import classes from './Post.module.css';
import likeIcon from "../../../../assets/images/heart.png";
import userPhoto from "../../../../assets/images/user.png";

type PostType = {
  likesCount: number
  message: string
}

const Post = (props: PostType) => {
  return (
    <div className={classes.item}>
      <img
        src='https://i.pinimg.com/736x/c1/62/15/c162157d47257988b3cfe228479389d0.jpg'
        alt=''/>
      {props.message}
      <div className={classes.icon}>
        <img src={likeIcon}/>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post
