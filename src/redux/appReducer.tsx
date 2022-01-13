import {getAuthUserData} from "./authReducer";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

type ActionTypes = ReturnType<typeof inicializedSuccess>

const initialState: InitialStateType = {
  initialized: false
}

export type InitialStateType = {
  initialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

export const inicializedSuccess = () => {
  return {
    type: 'INITIALIZED_SUCCESS'
  } as const
};

export const initializedApp = (): ThunkType =>  (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(()=>{
    dispatch(inicializedSuccess())
  })
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
