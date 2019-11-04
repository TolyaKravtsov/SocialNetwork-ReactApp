import React from "react";
import findUsers from "./findUsers.module.css"
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
}

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    };


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {
                    pages.map(pages => {
                        return <span className={this.props.currentPage === pages && findUsers.selectedPage}
                                     onClick={() => {
                                         this.onPageChanged(pages)
                                     }}>{pages}</span>
                    })
                }
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
                            {users.id}
                        </div>
                    </span>
                    <span>
                        <div>
                            {""}
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