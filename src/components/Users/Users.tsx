import React from "react";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    });
  }

  render() {

    let pagesCont = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCont; i++) {
      //  pages.push(i)
      if (pages.length < 20) {
        pages.push(i);
      }
    }

    return (
      <div>
        <div>
          {pages.map( p => {
            return <span
              className={this.props.currentPage === p ? classes.selectedPage : ""}
              onClick={(e) => {
                this.onPageChanged(p);
              }}
            >{p}</span>
          })}
        </div>
        {this.props.usersPage.users.map(u => <div key={u.id}>
      <span>
        <div>
        <img src={u.photos.small != null ? u.photos.small : userPhoto}
             className={classes.userPhoto} alt={'user'}/>
      </div>
      <div>
        {u.followed
          ? <button onClick={() => {
            this.props.unfollow(u.id)
          }}>Unfollow</button>
          : <button onClick={() => {
            this.props.follow(u.id)
          }}>Follow</button>}

      </div></span>
          <span>
<span>
  <div>{u.name}</div>
  <div>{u.status}</div>
</span>
<span>
  <div>{"u.location.country"}</div><div>{"u.location.city"}</div>
</span>
      </span>
        </div>)}

      </div>
    )
  }
}

export default Users;


/*
import React from "react";
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


const Users = (props: UsersPropsType) => {
  if (props.usersPage.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      props.setUsers(response.data.items)
    });

  }

  return (
    <div>
      {props.usersPage.users.map(u => <div key={u.id}>
      <span>
        <div>
        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} alt={'user'}/>
      </div>
      <div>
        {u.followed
          ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
          : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

      </div></span>
        <span>
<span>
  <div>{u.name}</div>
  <div>{u.status}</div>
</span>
<span>
  <div>{"u.location.country"}</div><div>{"u.location.city"}</div>
</span>
      </span>
      </div>)}

    </div>
  )
}

export default Users;*/
