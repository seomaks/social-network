import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

type UsersLocation = {
  city: string
  country: string
}

type PhotosType = {
  small: string | null
  large: string | null
}

export type UserType = {
  id: number
  photoUrl?: string
  photos: PhotosType
  followed: boolean
  name: string
  status: string
  location?: UsersLocation
}

type ActionTypes = ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  setCurrentPage: 1,
  isFetching: false,
  followingInProgress: []
}

export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersID) {
            return {...u, followed: true};
          }
          return u;
        })
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersID) {
            return {...u, followed: false};
          }
          return u;
        })
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export const followSuccess = (usersID: number) => {
  return {
    type: 'FOLLOW',
    usersID: usersID
  } as const
};
export const unfollowSuccess = (usersID: number) => {
  return {
    type: 'UNFOLLOW',
    usersID: usersID
  } as const
};
export const setUsers = (users: Array<UserType>) => {
  return {
    type: 'SET_USERS',
    users: users
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage: currentPage
  } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    totalUsersCount
  } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: 'TOGGLE_IS_FETCHING',
    isFetching
  } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
  return {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching, userId
  } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
      });
  }
}

export const follow = (userId: number) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      });
  }
}

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      });
  }
}