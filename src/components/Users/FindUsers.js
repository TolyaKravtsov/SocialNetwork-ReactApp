import React from "react";
import findUsers from "./findUsers.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";

let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize, ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
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
