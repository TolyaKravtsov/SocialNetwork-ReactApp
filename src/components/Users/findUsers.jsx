import React from "react";
import findUsers from "./findUsers.module.css"
import * as axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }


    render() {

        return (
            <div>
                {
                    this.props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img className={findUsers.img}
                             src={users.photos.small != null ? users.photos.small : "https://cutt.ly/denvfka"}
                             alt="photo"/>
                    </div>
                     <div>
                        {
                            users.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(users.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(users.id)
                                }}>Follow</button>
                        }
                </div>
                </span>
                        <span>
                    <span>
                        <div>
                            {users.name}
                        </div>
                        <div>
                            {users.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"users.location.country"}
                        </div>
                        <div>
                            {""}
                        </div>
                    </span>
                </span>
                    </div>)}
            </div>
        )

    }
}

export default Users;