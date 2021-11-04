import React from "react";
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {
  if (props.usersPage.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          photoUrl: 'https://w1.pngwing.com/pngs/795/806/png-transparent-turtle-drawing-teenage-mutant-ninja-turtles-leonardo-shuriken-green-frog-smile-headgear.png',
          followed: true,
          fullName: 'Maks',
          status: 'I have a high quality links',
          location: {city: 'Minsk', country: 'Belarus'}
        },
        {
          id: 2,
          photoUrl: 'https://w1.pngwing.com/pngs/795/806/png-transparent-turtle-drawing-teenage-mutant-ninja-turtles-leonardo-shuriken-green-frog-smile-headgear.png',
          followed: false,
          fullName: 'Georg',
          status: 'Do you need a backlinks',
          location: {city: 'Murmansk', country: 'Russia'}
        },
        {
          id: 3,
          photoUrl: 'https://w1.pngwing.com/pngs/795/806/png-transparent-turtle-drawing-teenage-mutant-ninja-turtles-leonardo-shuriken-green-frog-smile-headgear.png',
          followed: true,
          fullName: 'Nik',
          status: 'Can you hear me?',
          location: {city: 'Pskov', country: 'Russia'}
        },
        {
          id: 4,
          photoUrl: 'https://w1.pngwing.com/pngs/795/806/png-transparent-turtle-drawing-teenage-mutant-ninja-turtles-leonardo-shuriken-green-frog-smile-headgear.png',
          followed: false,
          fullName: 'Olya',
          status: 'Hi, how are you?',
          location: {city: 'Vitebsk', country: 'Belarus'}
        }]
    )
  }

  return (
    <div>
      {props.usersPage.users.map(u => <div key={u.id}>
      <span>
        <div>
        <img src={u.photoUrl} className={classes.userPhoto} alt={'user'}/>
      </div>
      <div>
        {u.followed
          ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
          : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

      </div></span>
        <span>
<span>
  <div>{u.fullName}</div>
  <div>{u.status}</div>
</span>
<span>
  <div>{u.location.country}</div><div>{u.location.city}</div>
</span>
      </span>
      </div>)}

    </div>
  )
}

export default Users;