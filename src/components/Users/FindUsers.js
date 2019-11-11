import React from "react";
import findUsers from "./findUsers.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }

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
            {props.users.map(users => (
                <div key={users.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + users.id}>
                <img
                    className={findUsers.img}
                    src={
                        users.photos.small != null
                            ? users.photos.small
                            : "https://cutt.ly/denvfka"
                    }
                    alt="photo"
                />
              </NavLink>
            </div>
            <div>
              {users.followed
                  ? (<button onClick={() => {
                      props.unfollow(users.id);
                  }}>
                      Unfollow</button>)
                  : (<button onClick={() => {
                          props.follow(users.id);
                      }}>Follow
                      </button>
                  )}
            </div>
          </span>
                    <span>
            <span>
              <div>{users.name}</div>
              <div>{users.id}</div>
            </span>
            <span>
              <div>{""}</div>
              <div>{""}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
