import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType} from "../../redux/store";
import {ChangeEvent} from "react";
import {store} from "../../redux/redux-store";

type PropsType = {
  sendMessage: ()=> void
  updateNewMessageBody: (body:string)=> void
  dialogsPage: DialogsType
}

const Dialogs = (props: PropsType) => {
  const state = store.getState().dialogsPage

  let dialogsElements = state.dialogs.map(dialog => <DialogItem
    id={dialog.id} name={dialog.name}/>)
  let messagesElements = state.messages.map(message => <Message
    id={message.id} message={message.message}/>)
  let newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
     props.sendMessage()
  }

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
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