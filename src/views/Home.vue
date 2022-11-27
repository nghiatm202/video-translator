<template>
  <MainHeaderVue :userName="userName" @ClickEventHandler="logoutHandler" />
  <MainFooterVue />
</template>

<script setup>
import { ref } from "vue"
import MainHeaderVue from "../components/Layout/MainHeader.vue"
import MainFooterVue from "../components/Layout/MainFooter.vue"

const userName = ref(localStorage.getItem("user_name"))

const logoutHandler = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("user_name")

  console.log(userName.value)
  return (userName.value = "")
}
</script>
