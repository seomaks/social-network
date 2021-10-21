import {PostType} from "./state";

const profileReducer =(state: any, action: any) => {

  switch (action.type) {
    case "ADD-POST":
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.postText,
        likesCount: 0
      }
      state.posts.push(newPost);
      state.messageForNewPost = ""
      break;
    case "CHANGE-NEW-TEXT":
      state.messageForNewPost = action.newText;
      break;
    default:
      return state;
  }
  return state
}

export const addPostAC = (postText: string) => {
  return {
    type: "ADD-POST",
    postText: postText
  } as const
}

export const changeNewTextAC = (newText: string) => {
  return {
    type: "CHANGE-NEW-TEXT",
    newText: newText
  } as const
}

export default profileReducer