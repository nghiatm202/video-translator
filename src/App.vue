<template>
  <div class="wrapper">
    <MainHeaderVue :userName="userName" @ClickEventHandler="logoutHandler" />
    <router-view />
    <MainFooterVue />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router"

import { ref } from "vue"
import MainHeaderVue from "./components/Layout/MainHeader.vue"
import MainFooterVue from "./components/Layout/MainFooter.vue"

const userName = ref(localStorage.getItem("user_name"))

const logoutHandler = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("user_name")

  return (userName.value = "")
}
</script>
