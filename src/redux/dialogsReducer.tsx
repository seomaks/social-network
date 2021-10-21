
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state: any, action: any) => {

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