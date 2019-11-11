import React from "react";
import findUsers from "./findUsers.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
              {users.followed ? (
                      <button
                          onClick={() => {
                              props.followingInProgress(true);


                              axios
                                  .delete(
                                      `https://social-network.samuraijs.com/api/1.0//follow/${users.id}`,
                                      {
                                          withCredentials: true,
                                          headers: {
                                              "API-KEY": "858cdff0-21c8-4da1-ac2d-e0c7e81bba49"
                                          }
                                      }
                                  )
                                  .then(response => {
                                      if (response.data.resultCode === 0) {
                                          props.unfollow(users.id);
                                          props.followingInProgress(false);
                                      }
                                  });
                          }}>

                          Unfollow
                      </button>
                  )
                  : (
                      <button
                          onClick={() => {
                              props.followingInProgress(false);
                              axios
                                  .post(
                                      `https://social-network.samuraijs.com/api/1.0//follow/${users.id}`,
                                      {},
                                      {
                                          withCredentials: true,
                                          headers: {
                                              "API-KEY": "858cdff0-21c8-4da1-ac2d-e0c7e81bba49"
                                          }
                                      }
                                  )
                                  .then(response => {
                                      if (response.data.resultCode === 0) {
                                          props.follow(users.id);
                                      }
                                      props.followingInProgress(false)
                                  });
                          }}
                      >
                          Follow
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
