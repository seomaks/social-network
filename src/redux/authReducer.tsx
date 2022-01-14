import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType} from "./redux-store";

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
        id: action.payload.id,
        isAuth: action.payload.isAuth,
        login: action.payload.login,
        email: action.payload.email
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {
    type: 'SET_USER_DATA', payload: {id, email, login, isAuth}
  } as const
};

export const getAuthUserData = () =>  (dispatch: Dispatch<ActionTypes>) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
      }
    });
}
//type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
type ThunkType = BaseThunkType<ActionTypes | FormAction>

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit("login", {_error: message} ))
      }
    });
}

export const logout = () => (dispatch: Dispatch<ActionTypes>) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    });
}