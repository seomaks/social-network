import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import style from './../common/FormsControls/FormsControls.module.css'
import {AppStateType} from '../../redux/redux-store'
import {GetStringKeys} from "../Profile/ProfileInfo/ProfileDataForm";
import {login} from "../../redux/authReducer";
import classes from "./Login.module.css";

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
  = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
      {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
      {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}

      {error && <div className={style.formSummaryError}>
        {error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const Login: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return <div className={classes.loginForm}>
    <h1>Login</h1>
      <p>To log in get registered
        <a href={'https://social-network.samuraijs.com/'}
           target={'_blank'}> here
        </a>
      </p>
      <p>or use common test account credentials:</p>
    <div>
    <p><b>Email</b>: free@samuraijs.com</p>
    <p><b>Password</b>: free</p>
    </div>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
  </div>
}