import { createStore } from "vuex"
import { postData } from "../api"

import router from "../router"
import axios from "axios"

const authenticateBaseURL = axios.create({
  baseURL: "http://dichvideo.xyz/api/v1/auth",
})

const store = createStore({
  state: {
    user: {
      register: {
        success: false,
      },
      login: "",
    },
  },
  getters: {},
  mutations: {
    async Register(state, payload) {
      const response = await postData(authenticateBaseURL, "register", payload)

      if (response.status === 200) {
        router.replace("/login")
        return (state.user.register.success = true)
      }
    },

    async LoginUser(state, payload) {
      const response = await postData(authenticateBaseURL, "login", payload)

      if (response.status === 200) {
        console.log(response.detail)
        console.log(response.data)
        state.user.login = response.data
        authenticateBaseURL.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access_token}`

        localStorage.setItem("access_token", response.data?.data?.access_token)
        localStorage.setItem("user_name", response.data?.data?.user.name)

        return router.replace("/")
      }
    },
  },

  actions: {},
})

export default store
