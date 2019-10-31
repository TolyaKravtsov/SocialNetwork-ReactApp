const FOLLOW = ' FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const  SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    newPostText: ''
};

const findUsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userID) {
                        return {...users, followed: true}
                    }
                    return users;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userID) {
                        return {...users, followed: false}
                    }
                    return users;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
            //склеиваем 2 массива:те,которые были в state и которые пришли в action
        }
        default:
            return state;
    }
};

//      AC- actionCreator
export const followAC = (userID) => ({type: FOLLOW, userID});
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default findUsersPageReducer;