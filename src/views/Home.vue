<style lang="scss">
.main-wrapper {
  display: flex;
  gap: 20px;
  padding: 30px;
  flex-wrap: wrap;
}

.main-sidebar {
  display: flex;
  flex-direction: column;
  flex: 1;

  .sidebar-thumbnail-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px 0;

    .sidebar-thumbnail {
      min-width: 190px;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .custom-file-input {
    color: transparent;
    font-family: inherit;
    margin-top: auto;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Upload Videos";
    color: black;
    display: inline-block;
    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active {
    outline: 0;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
}

.main-video {
  flex: 1;
  width: 100%;
  text-align: center;

  video {
    width: 100%;
  }

  .video-icon-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    img {
      cursor: pointer;
    }
  }
}

@media (max-width: 999.98px) {
  .main-wrapper {
    flex-direction: column;
  }
}
</style>

<template>
  <main>
    <div class="main-wrapper">
      <div class="main-sidebar">
        <TopBar />

        <div class="sidebar-thumbnail-wrapper">
          <div class="sidebar-thumbnail">
            <img
              src="https://dummyimage.com/300x200/000000/fff"
              alt="thumbnail"
            />
          </div>

          <div class="sidebar-thumbnail">
            <img
              src="https://dummyimage.com/300x200/000000/fff"
              alt="thumbnail"
            />
          </div>

          <div class="sidebar-thumbnail">
            <img
              src="https://dummyimage.com/300x200/000000/fff"
              alt="thumbnail"
            />
          </div>

          <div class="sidebar-thumbnail">
            <img
              src="https://dummyimage.com/300x200/000000/fff"
              alt="thumbnail"
            />
          </div>
        </div>

        <input type="file" class="custom-file-input" />
      </div>

      <div class="main-video">
        <div class="main-video-container">
          <video height="500" controls>
            <source
              src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              type="video/mp4"
            />
          </video>

          <div class="video-icon-wrapper">
            <img
              src="../assets/icon-prev.svg"
              alt="prev icon"
              class="icon-prev"
            />
            <img
              src="../assets/icon-play.svg"
              alt="play icon"
              class="icon-play"
            />
            <img
              src="../assets/icon-next.svg"
              alt="next icon"
              class="icon-next"
            />
          </div>
        </div>
      </div>
    </div>
    <Slider />
    <button @click="toast" type="success">Toast it!</button>
  </main>
</template>

<script setup>
import Slider from "../components/Common/Slider.vue"
import TopBar from "../components/Common/TopBar.vue"
import { createToast } from "mosha-vue-toastify"
import "mosha-vue-toastify/dist/style.css"

const toast = () => {
  createToast("Ngh??a ?????i ca", {
    type: "success",
  })
}
</script>
