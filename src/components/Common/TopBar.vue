<style lang="scss">
.btn-sidebar-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: green;
    border: none;
    color: #fff;
    padding: 10px 0;
    flex: 1;
    border-left: 1px solid #fff;
    border-bottom: none;
    border-top: none;
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;

    &:last-child {
      border-right: 1px solid #fff;
    }
  }
}
</style>

<template>
  <div class="btn-sidebar-wrapper">
    <button class="my-videos" @click="goHomePage()">My Videos</button>
    <button class="audio" @click="goAudioPage()">Audio</button>
    <button class="text" @click="goTextPage()">Text</button>
    <button class="preview" @click="goPreviewPage()">Preview</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const goHomePage = () => {
  return router.push("/")
}

const goAudioPage = () => {
  return router.push("/audio")
}

const goTextPage = () => {
  return router.push("/text")
}

const goPreviewPage = () => {
  return router.push("/preview")
}
</script>
