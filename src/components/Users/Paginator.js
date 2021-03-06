import React from "react";
import findUsers from "./findUsers.module.css";

let Paginator = ({portionSize, ...props}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);

    return (
        <div>
            {pages.map(pages => {
                return (
                    <span
                        className={props.currentPage === pages && findUsers.selectedPage}
                        onClick={() => {
                            props.onPageChanged(pages);
                        }}
                    >
            {pages}
          </span>
                );
            })}
        </div>
    );
};

export default Paginator;
