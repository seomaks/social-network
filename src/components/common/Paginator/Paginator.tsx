import React from "react";
import classes from "../../common/Paginator/Paginator.module.css";

type PropsType = {
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
}

export let Paginator = (props: PropsType) => {

  let pagesCont = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCont; i++) {
    if (pages.length < 20) {
      pages.push(i);
    }
  }

  return <div>
    {pages.map(p => {
      return <span
        className={props.currentPage === p ? classes.selectedPage : ""}
        onClick={(e) => {
          props.onPageChanged(p);
        }}
      >{p}</span>
    })}
  </div>
}