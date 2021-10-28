import {ActionsTypes, DialogsType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type PropsType = {
  store: StoreType
  dispatch: (action: ActionsTypes) => void
  dialogsPage: DialogsType
}

const DialogsContainer = (props: PropsType) => {

 // const state = props.store.getState().dialogsPage


  const onSendMessageClick = () => {
props.dispatch(sendMessageAC())
  }

  const onNewMessageChange = (body:string) => {
    props.dispatch(updateNewMessageBodyAC(body));
  }

  return <Dialogs updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  dialogsPage={props.dialogsPage}
  />
}

export default DialogsContainer;