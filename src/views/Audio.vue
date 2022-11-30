<style lang="scss">
.main-wrapper {
  display: flex;
  gap: 20px;
  padding: 30px;
  flex-wrap: wrap;
}

.modal-video-item {
  .modal-vue3-content {
    margin-right: 90px !important;
    width: 400px !important;
  }
}

.modal-vue3-body {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .videoItem {
    display: flex;
    align-items: center;
    gap: 20px;

    .video-image {
      width: 150px;
      height: 100px;
      overflow: hidden;
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .video-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }

  .input-wrapper {
    width: 100%;

    label {
      margin-bottom: 4px;
      display: block;
    }

    input,
    select {
      padding: 10px;
      margin: 0;
      width: 100%;
      border-radius: 8px;
      border: 1px solid #ccc;
      outline: none;
      box-sizing: border-box;
    }
  }
}

.main-sidebar {
  display: flex;
  flex-direction: column;
  flex: 1;

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

  .file-input-wrapper {
    display: flex;
    margin-top: auto;
  }

  .custom-file-input {
    color: transparent;
    font-family: inherit;
    width: 150px;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input-second::before {
    content: "Chọn từ video" !important;
  }
  .custom-file-input::before {
    content: "Upload Audio";
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
        <div class="btn-sidebar-wrapper">
          <button class="my-videos">My Videos</button>
          <button class="audio">Audio</button>
          <button class="text">Text</button>
          <button class="preview">Preview</button>
        </div>

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

        <div class="file-input-wrapper">
          <div class="custom-file-input" @click="showPopupUploadVideo" />
          <div
            class="custom-file-input custom-file-input-second"
            @click="showPopupListVideo"
          />
        </div>
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
            <img src="public/icon-prev.svg" alt="prev icon" class="icon-prev" />
            <img src="public/icon-play.svg" alt="play icon" class="icon-play" />
            <img src="public/icon-next.svg" alt="next icon" class="icon-next" />
          </div>
        </div>
      </div>
    </div>

    <Modal title="Upload Video" v-model:visible="uploadVideoIsVisible">
      <div class="input-wrapper">
        <label for="name">Tên: </label>
        <input type="text" id="name" name="name" />
      </div>

      <div class="input-wrapper">
        <label for="file">File: </label>
        <input type="text" id="file" name="file" />
      </div>

      <div class="input-wrapper">
        <label>Language: </label>
        <select name="language">
          <option value="Tiếng Việt">Tiếng Việt</option>
          <option value="English">English</option>
          <option value="日本語">日本語</option>
        </select>
      </div>
    </Modal>

    <Modal title="Danh sách Video" v-model:visible="videoListIsVisible">
      <div class="videoItem" @click="showPopupVideoItem">
        <div class="video-image">
          <img src="https://dummyimage.com/150x100/000/fff" alt="" />
        </div>
        <div class="video-info">
          <span class="video-name">Tên video</span>
          <span class="video-language">Language</span>
          <span class="video-time">Ngày tạo: <time>14/11/1996</time> </span>
        </div>
      </div>

      <div class="videoItem">
        <div class="video-image">
          <img src="https://dummyimage.com/150x100/000/fff" alt="" />
        </div>
        <div class="video-info">
          <span class="video-name">Tên video</span>
          <span class="video-language">Language</span>
          <span class="video-time">Ngày tạo: <time>14/11/1996</time> </span>
        </div>
      </div>
    </Modal>

    <Modal v-model:visible="videoItemPopup" modalClass="modal-video-item">
      <div class="input-wrapper">
        <label for="name">Tên: </label>
        <input type="text" id="name" name="name" />
      </div>

      <div class="input-wrapper">
        <label for="video">Video: </label>
        <input type="text" name="video" />
      </div>

      <div class="input-wrapper">
        <label>Language: </label>
        <select name="language">
          <option value="Tiếng Việt">Tiếng Việt</option>
          <option value="English">English</option>
          <option value="日本語">日本語</option>
        </select>
      </div>

      <p class="video-cost">Giá tiền: <span>500.000đ</span></p>
    </Modal>
  </main>
</template>

<script setup>
import { ref } from "vue"
import { Modal } from "usemodal-vue3"

let uploadVideoIsVisible = ref(false)
let videoListIsVisible = ref(false)
let videoItemPopup = ref(false)

const showPopupUploadVideo = () => {
  uploadVideoIsVisible.value = true
}

const showPopupListVideo = () => {
  videoListIsVisible.value = true
}

const showPopupVideoItem = () => {
  videoItemPopup.value = true
}
</script>
