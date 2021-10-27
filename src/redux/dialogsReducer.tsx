
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newMessageBody = action.body;
      break;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({id: 6, message: body});
      break;
    default:
      return state;
  }
  return state
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

export default dialogsReducer