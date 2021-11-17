import {
  InitialStateType,
  sendMessageAC,
  updateNewMessageBodyAC
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
  dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
  updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
return {
  dialogsPage: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateNewMessageBody: (body: string)=> {
      dispatch(updateNewMessageBodyAC(body))
    },
    sendMessage: ()=> {
      dispatch(sendMessageAC())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) ;

export default DialogsContainer;