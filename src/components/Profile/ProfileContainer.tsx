import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
  getStatus,
  getUserProfile,
  ProfileType, updateStatus,
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
  userId: string
}

type MapStateToPropsType = {
  profile: ProfileType | null
  status: string
  authorizedUserId: number | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  getUserProfile: (userId: number | string | null) => void
  getStatus: (userId: number |string | null) => void
  updateStatus: (status: string) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
      if (!userId) {
   //     userId = this.props.authorizedUserId!.toString()
        userId = this.props.authorizedUserId!.toString()
      }

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isAuth={this.props.isAuth}/>
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
 // withAuthRedirect // login on the profile page
)(ProfileContainer)