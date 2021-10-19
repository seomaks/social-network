import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/state";

type PropsType = {
  dialogs: DialogsType[]
  messages: MessageType[]
}

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.dialogs.map(dialog => <DialogItem
    id={dialog.id} name={dialog.name}/>)
  let messagesElements = props.messages.map(message => <Message
    id={message.id} message={message.message}/>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;