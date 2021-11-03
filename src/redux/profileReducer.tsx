import {ActionsTypes} from "./store";

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
  ] as Array<PostType>,
  messageForNewPost: "",
}

export type InitialStateType = typeof initialState

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.postText,
        likesCount: 0
      }
      const stateCopy = {...state};
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.messageForNewPost = ""
      return stateCopy;
    }
    case "CHANGE-NEW-TEXT": {
      const stateCopy = {...state};
      stateCopy.messageForNewPost = action.newText;
      return stateCopy
    }
    default:
      return state;
  }
//  return state
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