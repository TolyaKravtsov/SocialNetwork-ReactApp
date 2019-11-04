const FOLLOW = ' FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const PRELOADER_TURNED = 'PRELOADER_TURNED';

let initialState = {
    users: [],
    newPostText: '',
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    inProgress:false,
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
            return {...state, users: action.users}
            //склеиваем 2 массива:те,которые были в state и которые пришли в action
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case PRELOADER_TURNED: {
            return {...state, inProgress: action.inProgress}
        }
        default:
            return state;
    }
};

//      AC- actionCreator
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const preloaderTurned = (inProgress) => ({type: PRELOADER_TURNED, inProgress: inProgress});


export default findUsersPageReducer;