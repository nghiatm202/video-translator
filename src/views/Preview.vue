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

.preview-thumbnail-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  max-height: 580px;
  overflow-y: auto;
  margin-bottom: 30px;

  .preview-thumbnail {
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid green;
    padding: 10px;

    &:last-child {
      border-bottom: 0px;
    }

    img {
      padding: 10px;
      border: 2px solid #151515;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }

    .audio-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
}

.modal-vue3-body {
  display: flex;
  flex-direction: column;
  gap: 20px;

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

  .video-thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    max-height: 500px;
    overflow-y: auto;
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
    content: "Chọn từ File" !important;
  }
  .custom-file-input::before {
    content: "Chọn từ Audio";
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

.preview-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 45%;

  select {
    padding: 10px;
    margin: 0;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    box-sizing: border-box;
  }

  .try-listening,
  .download,
  .speed,
  .accent {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;

    .track-container {
      margin-left: 20px;
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

        <div class="preview-thumbnail-wrapper">
          <div class="preview-thumbnail" v-for="item in videoDataFaker">
            <img src="../assets/icon-menu.svg" alt="menu icon" />
            <div class="preview-info">
              <span class="preview-name">{{ item.name }}</span>
              <p class="preview-language">
                Ngôn ngữ: <span>{{ item.language }}</span>
              </p>
              <span class="preview-time"
                >Ngày tạo: <time>{{ item.created_at }}</time>
              </span>
            </div>
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

      <div class="preview-wrapper">
        <select class="preview-language">
          <option value="Tiếng Việt">Tiếng Việt</option>
          <option value="English">English</option>
          <option value="日本語">日本語</option>
        </select>
        <p class="speed">
          <span>Speed</span>
          <RangeSpeed />
        </p>
        <p class="accent">
          <span>Giọng đọc</span>
          <RangeAccent />
        </p>
        <p class="try-listening">
          <span>Nghe thử</span>
          <img src="../assets/icon-pause.svg" alt="pause icon" />
        </p>
        <p class="download">
          <span>Download</span>
          <img src="../assets/icon-download.svg" alt="download icon" />
        </p>
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
import RangeAccent from "../components/Common/RangeAccent.vue"
import RangeSpeed from "../components/Common/RangeSpeed.vue"
import TopBar from "../components/Common/TopBar.vue"

const videoDataFaker = [
  {
    name: "Sint velit eveniet",
    language: "VN",
    created_at: "14/11/2002",
  },
  {
    name: "Rerum atque repellat",
    language: "US",
    created_at: "14/11/2002",
  },
  {
    name: "Sint velit eveniet",
    language: "VN",
    created_at: "14/11/2002",
  },
  {
    name: "Sint velit eveniet",
    language: "VN",
    created_at: "14/11/2002",
  },
  {
    name: "Rerum atque repellat",
    language: "US",
    created_at: "14/11/2002",
  },
  {
    name: "Sint velit eveniet",
    language: "VN",
    created_at: "14/11/2002",
  },
  {
    name: "Sint velit eveniet",
    language: "VN",
    created_at: "14/11/2002",
  },
  {
    name: "Rerum atque repellat",
    language: "US",
    created_at: "14/11/2002",
  },
  {
    name: "Sint velit eveniet",
    language: "VN",
    created_at: "14/11/2002",
  },
]

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
