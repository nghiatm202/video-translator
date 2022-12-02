import { createStore } from "vuex"
import api from "../api"

import router from "../router"

const authenticateBaseURL = api.createNewBaseURL(
  "http://dichvideo.xyz/api/v1",
  10000
)

const store = createStore({
  state: {
    holder: [],
    user: {
      register: {
        success: false,
      },
      login: "",
    },
  },
  getters: {},
  mutations: {
    jsonHolder(state, payload) {
      return (state.holder = payload)
    },

    storeUser(state, payload) {
      return (state.user.login = payload)
    },

    resetUser(state) {
      localStorage.removeItem("access_token")
      localStorage.removeItem("user")

      return (state.user.login = "")
    },

    async Register(state, payload) {
      const response = await authenticateBaseURL.post("auth/register", payload)

      if (response.status === 200) {
        router.replace("/login")
        return (state.user.register.success = true)
      }
    },

    async LoginUser(state, payload) {
      const response = await authenticateBaseURL.post("auth/login", payload)

      if (response.status === 200) {
        state.user.login = response.data
        authenticateBaseURL.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access_token}`

        localStorage.setItem("access_token", response.data?.data?.access_token)
        localStorage.setItem("user", JSON.stringify(response.data?.data))

        state.user.login = response.data?.data
        router.replace("/")

        return localStorage.getItem("user")
      }
    },
  },
})

export default store
