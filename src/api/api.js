import * as axios from "axios";


const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "74142593-85f3-4118-ba9b-fbc0ec9964dd"
    }

});


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, photo, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },


};
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return (instance.post(
                `follow/${userId}`,
            )
        )

    },
    unfollow(userId) {
        return (
            instance.delete(
                `follow/${userId}`,
            )
        )
    },
    getProfile(userId) {

        return profileAPI.getProfile(userId);
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    loginUser(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logoutUser(email, password, rememberMe = false) {
        return instance.delete(`auth/login`)
    },


};
