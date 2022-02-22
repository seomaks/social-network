import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {FormAction, stopSubmit} from 'redux-form'
import {BaseThunkType} from "./redux-store";

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string
  large: string
}
export type ProfileType = {
  userId: number | undefined
  aboutMe: string
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
  | ReturnType<typeof savePhotoSuccess>

type ThunkType = BaseThunkType<ActionsTypes | FormAction>


export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {
    case "profile/ADD-POST": {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case "profile/SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile
      };
    }
    case "profile/SET_STATUS": {
      return {
        ...state,
        status: action.status
      };
    }
    case "profile/SAVE_PHOTO_SUCCESS":
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
      };
    default:
      return state;
  }
}

export const addPostAC = (newPostText: string) => {
  return {
    type: "profile/ADD-POST",
    newPostText
  } as const
}

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: "profile/SET_USER_PROFILE",
    profile
  } as const
}

export const setStatus = (status: string) => {
  return {
    type: "profile/SET_STATUS",
    status
  } as const
}

export const savePhotoSuccess = (photos: PhotosType) => {
  return {
    type: "profile/SAVE_PHOTO_SUCCESS",
    photos
  } as const
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.id
  const data = await profileAPI.saveProfile(profile)

  if (data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId))
    } else {
      throw new Error("userId can't be null")
    }
  } else {
    dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }))
    return Promise.reject(data.messages[0])
  }
}

export default profileReducer