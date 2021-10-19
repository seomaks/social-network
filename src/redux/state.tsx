let renderTree = (state:StateType) => {
  console.log("state changed")
}

export const subscribe = (observer: (state:StateType) => void) => {
  renderTree = observer;
}

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

export const state = {

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
}

export const addPost = (postText: string) => {
  const newPost: PostType = {
    id: new Date().getTime(),
    message: postText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.messageForNewPost = ""
  renderTree(state);
}

export const changeNewText = (newText: string) => {
  state.profilePage.messageForNewPost = newText;
  renderTree(state);
}

export default state


