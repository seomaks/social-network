import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType} from "./redux-store";
import message from "../components/Dialogs/Message/Message";

type ActionTypes =
  ReturnType<typeof setAuthUserData>
  | ReturnType<typeof getCaptchaUrlSuccess>

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

export type InitialStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captchaUrl: string | null
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'auth/SET_USER_DATA':
    case 'auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {
    type: 'auth/SET_USER_DATA', payload: {id, email, login, isAuth}
  } as const
};

export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
  return {
    type: 'auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
  } as const
};

export const getAuthUserData = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {
    let {id, login, email} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true))
  }
}

type ThunkType = BaseThunkType<ActionTypes | FormAction>

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
    dispatch(stopSubmit("login", {_error: message}))
  }
}

export const logout = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}