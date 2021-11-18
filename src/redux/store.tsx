import profileReducer, {addPostAC, changeNewTextAC} from "./profileReducer";
import dialogsReducer, {
  sendMessageAC,
  updateNewMessageBodyAC
} from "./dialogsReducer";

export type DialogsPageType = {
  dialogs: DialogsType[]
  messages: MessageType[]
  newMessageBody: string
}

export type DialogsType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

export type MyPostsPageType = {
  posts: PostType[]
  messageForNewPost: string
}

type PostType = {
  id: number
  message: string
  likesCount: number
}

type StateType = {
  profilePage: MyPostsPageType
  dialogsPage: DialogsPageType
}

type StoreType = {
  _state: StateType
  _renderTree: (state:StateType) => void
  subscribe: (observer: (state:StateType) => void) => void
  getState: () => StateType
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
  | ReturnType<typeof changeNewTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>

const store: StoreType = {
  _state: {

    profilePage: {
      messageForNewPost: "",
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
      ],
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Maks'},
        {id: 2, name: 'Boris'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Olya'},
        {id: 5, name: 'Natasha'},
        {id: 6, name: 'Sergey'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Where are you?'},
        {id: 5, message: 'Relax'},
        {id: 6, message: 'Yep'}
      ],
      newMessageBody: ""
    }
  },
  _renderTree (state:StateType) {
    console.log("state changed")
  },
  subscribe (observer) {
    this._renderTree = observer;
  },
  getState () {
    return this._state;
  },
  dispatch(action) {

    // this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._renderTree(this._state);
  }
}



