import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";

const DialogItem = (props: DialogsType) => {
  let path = "/dialogs/" + props.id

  return <div className={classes.dialog + ' ' + classes.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}


export default DialogItem;