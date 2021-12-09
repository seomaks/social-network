import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
  getUserProfile,
  ProfileType,
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
  userId: string
}
type MapStateToPropsType = {
  profile: ProfileType | null
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
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
})

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)