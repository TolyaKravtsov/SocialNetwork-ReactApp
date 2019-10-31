import React from "react";
import findUsers from "./findUsers.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://clck.ru/JEiYu',
                followed: true,
                fullName: 'Tolya.K',
                status: 'Im fine',
                location: {country: 'Belarus', town: 'Minsk'}
            },
            {
                id: 2,
                photoUrl: 'https://clck.ru/JEiYu',
                followed: false,
                fullName: 'Dimych.K',
                status: 'Im leader',
                location: {country: 'Belarus', town: 'Minsk'}
            },
            {
                id: 3,
                photoUrl: 'https://clck.ru/JEiYu',
                followed: true,
                fullName: 'John.S',
                status: 'Stark best',
                location: {country: 'Vesteros', town: 'Winterfell'}
            }]
        )
    }
    return (
        <div>
            {props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img className={findUsers.img} src="https://clck.ru/JS8HD" alt="photo"/>
                    </div>
                    <div>
                        {
                            users.followed
                                ? <button onClick={() => {
                                    props.unfollow(users.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(users.id)
                                }}>Follow</button>
                        }
                </div>
                </span>
                <span>
                    <span>
                        <div>
                            {users.fullName}
                        </div>
                        <div>
                            {users.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {users.location.country}
                        </div>
                        <div>
                            {users.location.city}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    )

};


export default Users;