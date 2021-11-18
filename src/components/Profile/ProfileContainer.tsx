import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
  profile: ProfileType | null
}

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

type PropsType = MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType>{
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer)