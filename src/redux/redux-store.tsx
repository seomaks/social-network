import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

export let store = createStore(rootReducer);
export type AppStateType = ReturnType<typeof rootReducer>;



