import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.findUsersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(users => true);
});


export const getPageSizeSelector = (state) => {
    return state.findUsersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.findUsersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.findUsersPage.currentPage
};

export const getInProgress = (state) => {
    return state.findUsersPage.inProgress;
};

export const getFollowingInProgress = (state) => {
    return state.findUsersPage.followingInProgress;
};