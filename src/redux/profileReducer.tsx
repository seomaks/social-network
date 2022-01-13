import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
  id: number
  message: string
  likesCount: number
}
type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
type PhotosType = {
  small: string
  large: string
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  status: string
}

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: ""
}

export type InitialStateType = typeof initialState
export type ActionsTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>


export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
       // newPostText: ""
      };
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile
      };
    }
    case "SET_STATUS": {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
}

export const addPostAC = (newPostText: string) => {
  return {
    type: "ADD-POST",
    newPostText
  } as const
}

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: "SET_USER_PROFILE",
    profile
  } as const
}

export const setStatus = (status: string) => {
  return {
    type: "SET_STATUS",
    status
  } as const
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  });
}

export const getStatus = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  });
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsTypes>) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }});
}

export default profileReducer