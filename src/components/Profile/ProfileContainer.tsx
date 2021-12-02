import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
  getUserProfile,
  ProfileType,
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
  userId: string
}
type MapStateToPropsType = {
  profile: ProfileType | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '3'
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)