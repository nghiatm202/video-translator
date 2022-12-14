import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "", name: "home", component: () => import("@/views/Home.vue") },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/audio",
    name: "audio",
    component: () => import("@/views/Audio.vue"),
  },
  {
    path: "/text",
    name: "text",
    component: () => import("@/views/Text.vue"),
  },
  {
    path: "/preview",
    name: "preview",
    component: () => import("@/views/Preview.vue"),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
