import axios from "axios";
import {ProfileType} from "../redux/profileReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "0c074aaa-aceb-492d-a73f-9ca4f6d5a703"}
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
          return response.data
        }
      )
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`
    )
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: number) {
    console.warn('Obsolete method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status})
  },
  savePhoto(photoFile: File) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put('/profile/photo', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  },
  saveProfile(profile: ProfileType) {
    return instance
      .put(`profile`, profile)
      .then(res => res.data)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

