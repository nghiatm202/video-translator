import { createApp } from "vue"
import App from "./App.vue"
import axios from "axios"
import router from "@/plugins/router"
import "./style.css"

axios.defaults.baseURL = "http://dichvideo.xyz/api/v1/"
axios.defaults.headers.common["Authorization"] =
  "Bearer klahdk9817landlkahoaowhd"
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

const app = createApp(App).use(router)

router.isReady().then(() => {
  app.mount("#app")
})
