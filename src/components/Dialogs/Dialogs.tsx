import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {store} from "../../redux/redux-store";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type DialogDataType = {
  newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {
  const state = store.getState().dialogsPage

  let dialogsElements = state.dialogs.map(dialog => <DialogItem
    id={dialog.id} name={dialog.name} key={dialog.id}/>)
  let messagesElements = state.messages.map(message => <Message
    id={message.id} message={message.message} key={message.id}/>)

  const addNewMessage = (values: {newMessageBody: string} ) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<DialogDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required, maxLength50]}
               name="newMessageBody"
               placeholder="Enter your message" />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<DialogDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
