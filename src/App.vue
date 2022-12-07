<template>
  <div class="wrapper">
    <MainHeaderVue />
    <router-view />
    <MainFooterVue />
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { RouterView } from "vue-router"

import MainHeaderVue from "./components/Layout/MainHeader.vue"
import MainFooterVue from "./components/Layout/MainFooter.vue"

const store = useStore()
window.store = store
</script>
