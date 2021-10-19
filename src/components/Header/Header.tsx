import React from "react";
import classes from './Header.module.css'

const Header = () => {
  return <header className={classes.header}>
{/*
    <img src='https://duckworthbooks.com/wp-content/uploads/2017/06/logo-tv-logo-300x295.png' alt='logo'/>
*/}
    <span className={classes.logoText}>SEOMAX</span>
  </header>
}

export default Header
