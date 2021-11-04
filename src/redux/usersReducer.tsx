type UsersLocation = {
  city: string
  country: string
}

export type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: UsersLocation
}

type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUserAC>

const initialState: InitialStateType = {
  users: []
}

export type InitialStateType = {
  users: Array<UserType>
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return  {
        ...state,
        users: state.users.map(u => {
         if (u.id === action.usersID) {
          return {...u, followed: true};
         }
         return u;
        })
      };
    case 'UNFOLLOW':
      return  {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersID) {
            return {...u, followed: false};
          }
          return u;
        })
      };
    case 'SET_USERS':
      return  {
        ...state,
        users: [...state.users, ...action.users]
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
