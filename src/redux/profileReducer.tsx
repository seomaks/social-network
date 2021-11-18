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
}

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
  ] as Array<PostType>,
  messageForNewPost: "",
  profile: null as ProfileType | null
}

export type InitialStateType = typeof initialState

export type ActionsTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof changeNewTextAC>
  | ReturnType<typeof setUserProfile>


export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.postText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        messageForNewPost: ""
      };
    }
    case "CHANGE-NEW-TEXT": {
      return {
        ...state,
        messageForNewPost: action.newText
      };
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
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

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: "SET_USER_PROFILE",
    profile
  } as const
}

export default profileReducer