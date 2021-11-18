import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
  userId: string
}
type MapStateToPropsType = {
  profile: ProfileType | null
}
type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType>{
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {userId = '3'}
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
      this.props.setUserProfile(response.data)
    });
  }

  render() {
  return (
  <div>
    <Profile {...this.props} profile={this.props.profile}/>
  </div>
  )
}
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)