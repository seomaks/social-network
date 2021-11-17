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

type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUserAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof setIsFetchingAC>

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  setCurrentPage: 1,
  isFetching: false
}

export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: number
  isFetching: boolean
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
    default:
      return state;
  }
};

export const followAC = (usersID: number) => {
  return {
    type: 'FOLLOW',
    usersID: usersID
  } as const
};
export const unfollowAC = (usersID: number) => {
  return {
    type: 'UNFOLLOW',
    usersID: usersID
  } as const
};
export const setUserAC = (users: Array<UserType>) => {
  return {
    type: 'SET_USERS',
    users: users
  } as const
}

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage: currentPage
  } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    totalUsersCount
  } as const
}

export const setIsFetchingAC = (isFetching: boolean) => {
  return {
    type: 'TOGGLE_IS_FETCHING',
    isFetching
  } as const
}