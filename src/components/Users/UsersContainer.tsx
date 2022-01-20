import React from "react";
import {
  follow, requesUsers,
  setCurrentPage,
  unfollow,
  UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose, Dispatch} from "redux";
import {ActionsTypes} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
  getCurrentPage, getFollowingInProgress, getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

type MapDispatchPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  dispatch: Dispatch<ActionsTypes>
  getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
  //  this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
     ;
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : ""}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

// let mapStateToProps = (state: AppStateType): MapStatePropsType => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requesUsers})
)(UsersContainer)