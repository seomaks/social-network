import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import classes
  from "../../components/common/FormsControls/FormsControls.module.css";


type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

type PropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
  isAuth: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'}
               validate={[required]}
               component={Input}/>
      </div>
      <div>
        <Field placeholder={'password'} name={'password'}
               type={"password"}
               validate={[required]}
               component={Input}/>
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember
        me
      </div>
      {props.error && <div className={classes.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: PropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)