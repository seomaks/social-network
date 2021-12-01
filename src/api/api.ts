import axios from "axios";

const instance = axios.create({
  withCredentials:true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "0c074aaa-aceb-492d-a73f-9ca4f6d5a703"}
})

export const usersAPI = {
  getUsers (currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data}
      )},
  follow(userId: number) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    )
  },
  unfollow(userId: number) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }

}


