type DialogsPageType = {
  dialogs: DialogsType[]
  messages: MessageType[]
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
  addPost: (text: string) => void
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
  changeNewText: (newText: string) => void
  addPost: (postText: string) => void
  _renderTree: (state:StateType) => void
  subscribe: (observer: (state:StateType) => void) => void
  getState: () => StateType
}

export const store: StoreType = {
  _state: {

    profilePage: {
      messageForNewPost: "",
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
      ],
      addPost: postMessage
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
      ]
    }
  },
  changeNewText(newText: string) {
    this._state.profilePage.messageForNewPost = newText;
    this._renderTree(this._state);
  },
  addPost(postText: string) {
    const newPost: PostType = {
      id: new Date().getTime(),
      message: postText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.messageForNewPost = ""
    this._renderTree(this._state);
  },
  _renderTree (state:StateType) {
    console.log("state changed")
  },
  subscribe (observer) {
    this._renderTree = observer;
  },
  getState () {
    return this._state;
  }
}



