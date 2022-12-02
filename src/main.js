import { createApp } from "vue"
import App from "./App.vue"
import axios from "axios"
import router from "@/router"
import store from "./store"
// import api from "./api"

import "./style.css"

// api.init("http://dichvideo.xyz/api/v1")

const app = createApp(App).use(store).use(router)

router.isReady().then(() => {
  app.mount("#app")
})
