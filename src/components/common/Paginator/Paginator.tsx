import React, {useState} from "react";
import classes from "../../common/Paginator/Paginator.module.css";
import cn from "classnames"

type PropsType = {
  onPageChanged: (pageNumber: number) => void
  totalItemsCount: number
  pageSize: number
  currentPage: number
  portionSize: number
}

export let Paginator = (props: PropsType) => {

  let pagesCont = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCont; i++) {
      pages.push(i);
  }

  let portionCount = Math.ceil(pagesCont / props.portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
  const rightPortionPageNumber = portionNumber * props.portionSize

  return <div className={cn(classes.paginator)}>
    {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>PREV</button>}
    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map(p => {
        return <span className={cn({
          [classes.selectedPage]: props.currentPage === p
        }, classes.pageNumber)}
                     key={p}
                     onClick={(e) => {
                       props.onPageChanged(p);
                     }}>{p}</span>
      })}
    {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>NEXT</button>}
  </div>
}