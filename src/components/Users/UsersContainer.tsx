import Users from "./Users";
import {
  followAC,
  InitialStateType, setCurrentPageAC, setTotalUsersCountAC,
  setUserAC,
  unfollowAC, UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStatePropsType = {
  usersPage: InitialStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUserAC(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

