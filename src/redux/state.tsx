const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsPageType = {
  dialogs: DialogsType[]
  messages: MessageType[]
  //new
  newMessageBody: string
}

export type DialogsType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

export type MyPostsPageType = {
  posts: PostType[]
  messageForNewPost: string
}

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type StateType = {
  profilePage: MyPostsPageType
  dialogsPage: DialogsPageType
}

export type StoreType = {
  _state: StateType
  _renderTree: (state:StateType) => void
  subscribe: (observer: (state:StateType) => void) => void
  getState: () => StateType
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>

export const addPostAC = (postText: string) => {
  return {
    type: "ADD-POST",
    postText: postText
  } as const
}

export const changeNewTextAC = (newText: string) => {
  return {
    type: "CHANGE-NEW-TEXT",
    newText: newText
  } as const
}

export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE,
  } as const
}

export const updateNewMessageBodyAC = (body: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    body: body
  } as const
}

export const store: StoreType = {
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
      //new
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
    if (action.type === "ADD-POST") {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.postText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.messageForNewPost = ""
      this._renderTree(this._state);
    } else if (action.type === "CHANGE-NEW-TEXT") {
      this._state.profilePage.messageForNewPost = action.newText;
      this._renderTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._renderTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._renderTree(this._state);
    }
  }
}



