import {ActionsTypes} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    {id: 1, name: 'Maks'},
    {id: 2, name: 'Boris'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Olya'},
    {id: 5, name: 'Natasha'},
    {id: 6, name: 'Sergey'}
  ] as Array<DialogsType>,
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Where are you?'},
    {id: 5, message: 'Relax'},
    {id: 6, message: 'Yep'}
  ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;

      return  {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      }
    }
    default:
      return state;
  }
}

export const sendMessageAC = (newMessageBody: string) => {
  return {
    type: SEND_MESSAGE, newMessageBody
  } as const
}

export default dialogsReducer