/*type setAuthUserDataType = {
  userId: number,
  email: string,
  login: string,
  isAuth: boolean
}

export type setAuthUserType = {
  type: typeof setAuthUserData,
  data: setAuthUserDataType
}*/

import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type ActionTypes = ReturnType<typeof setAuthUserData>

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export type InitialStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}


export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id: number, email: string, login: string) => {
  return {
    type: 'SET_USER_DATA', data: {id, email, login}
  } as const
};

export const getAuthUserData = () => (dispatch: Dispatch<ActionTypes>) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login))
      }
    });
}
