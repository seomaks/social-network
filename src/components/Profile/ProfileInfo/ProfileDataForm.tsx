import React from "react";
import classes from './ProfileInfo.module.css';

import style from "../../common/FormsControls/FormsControls.module.css";
import {ProfileType} from "../../../redux/profileReducer";
import {
  createField,
  Input,
  Textarea
} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
  profile: ProfileType
}
export type GetStringKeys<T> = Extract<keyof T, string>

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
  return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    {error && <div className={style.formSummaryError}>
      {error}
    </div>
    }
    <div>
      <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
    </div>
    <div>
      <b>Looking for a job</b>: { createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"} )}
    </div>

    <div>
      <b>My professional skills</b>:
      { createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea  )}
    </div>
    <div>
      <b>About me</b>:
      { createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea  )}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <div key={key} className={classes.contact}>
        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
      </div>
    })}
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;