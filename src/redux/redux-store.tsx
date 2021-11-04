import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

