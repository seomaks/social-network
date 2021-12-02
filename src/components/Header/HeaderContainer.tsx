import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
  isAuth: boolean
  id: number | null
  email: string | null
  login: string | null
}

type MapDispatchToProps = {
  getAuthUserData: () => void
}

export type PropsType = MapStatePropsType & MapDispatchToProps


class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getAuthUserData()
   /* authAPI.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          this.props.setAuthUserData(id, email, login)
        }
      });*/
  }

  render() {
    return <Header {...this.props} isAuth={this.props.isAuth}
                   login={this.props.login}/>;
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  email: state.auth.email
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
