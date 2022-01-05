import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
  isAuth: boolean,
  login: string | null
  logout: () => void
}

const Header = (props: PropsType) => {
  return <header className={classes.header}>
    <span className={classes.logoText}>SEOMAX</span>
    <div className={classes.loginBlock}>
      {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
        <NavLink to="/login">
          Login
        </NavLink>}
    </div>
  </header>
}

export default Header
