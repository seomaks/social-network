import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  ActionsTypes,
  DialogsType,
  MessageType
} from "../../redux/store";
import {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";



type PropsType = {
  dialogs: DialogsType[]
  messages: MessageType[]
  newMessageBody: string
  dispatch:(action: ActionsTypes)=>void
}

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.dialogs.map(dialog => <DialogItem
    id={dialog.id} name={dialog.name}/>)
  let messagesElements = props.messages.map(message => <Message
    id={message.id} message={message.message}/>)
  let newMessageBody = props.newMessageBody;

  const onSendMessageClick = () => {
props.dispatch(sendMessageAC())
  }

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyAC(body));
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder={"Enter your message, please"}
              value={newMessageBody}
            onChange={onNewMessageChange}
            >
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;