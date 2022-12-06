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

.text-wrapper {
  display: flex;
  flex-direction: column;
  max-height: 680px;
  overflow-y: auto;
  padding-right: 10px;
}

.text-wrapper-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 600px;
  padding-right: 10px;
  overflow-y: auto;

  .icon-change-text {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
  }

  .text-btn {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;

    button {
      padding: 8px 12px;
      background-color: green;
      border: none;
      outline: none;
      color: white;
      cursor: pointer;
      border-radius: 4px;
      font-size: 16px;

      &:active {
        transform: scale(0.95);
      }
    }
  }

  .text-component-item {
    display: flex;
    gap: 10px;

    .text-content {
      display: flex;
      flex-direction: column;
      gap: 16px;

      input {
        padding: 10px;
        margin: 0;
        width: 100%;
        border-radius: 8px;
        border: 1px solid #ccc;
        outline: none;
        box-sizing: border-box;
      }
    }

    .line {
      width: 60px;
      height: 100%;
      background-color: green;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 700;
      outline: none;
      font-size: 16px;
      border: none;
      border-radius: 4px;
    }

    .number-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;

      .number-left,
      .number-right {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .number-item {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        border: 1px solid green;
        font-size: 16px;
      }
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

        <div class="video-thumbnail-wrapper">
          <div class="videoItem" v-for="item in videoDataFaker">
            <div class="video-image">
              <img src="https://dummyimage.com/150x100/000/fff" alt="" />
            </div>
            <div class="video-info">
              <span class="video-name">{{ item.name }}</span>
              <p class="video-language">
                Ngôn ngữ: <span>{{ item.language }}</span>
              </p>
              <span class="video-time"
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

      <divc class="text-wrapper">
        <div class="text-wrapper-container">
          <div class="text-component-item">
            <select class="line">
              <option value="VN">US</option>
              <option value="US">VN</option>
            </select>

            <div class="text-content">
              <div class="number-wrapper">
                <div class="number-left">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                </div>
                <img
                  src="../assets/icon-arrow-right-long.svg"
                  alt="arrow right icon"
                />
                <div class="number-right">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="5" />
                  <input class="number-item" type="number" value="6" />
                </div>
              </div>

              <input
                type="text"
                placeholder="Hello my name is A"
                class="input-first"
              />

              <div class="number-wrapper">
                <div class="number-left">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                </div>
                <img
                  src="../assets/icon-arrow-right-long.svg"
                  alt="arrow right icon"
                />
                <div class="number-right">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="5" />
                  <input class="number-item" type="number" value="6" />
                </div>
              </div>

              <input type="text" placeholder="It's my" class="input-second" />
            </div>
          </div>

          <div class="text-btn">
            <button>Save</button>
            <button>Save As</button>
          </div>

          <img
            src="../assets/icon-change.svg"
            alt="change icon"
            class="icon-change-text"
          />
          <div class="text-component-item">
            <!-- <div class="line">VN</div> -->
            <select class="line">
              <option value="VN">VN</option>
              <option value="US">US</option>
            </select>

            <div class="text-content">
              <div class="number-wrapper">
                <div class="number-left">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                </div>
                <img
                  src="../assets/icon-arrow-right-long.svg"
                  alt="arrow right icon"
                />
                <div class="number-right">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="5" />
                  <input class="number-item" type="number" value="6" />
                </div>
              </div>

              <input type="text" placeholder="Xin chào" class="input-first" />

              <div class="number-wrapper">
                <div class="number-left">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                </div>
                <img
                  src="../assets/icon-arrow-right-long.svg"
                  alt="arrow right icon"
                />
                <div class="number-right">
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="0" />
                  <input class="number-item" type="number" value="5" />
                  <input class="number-item" type="number" value="6" />
                </div>
              </div>

              <input type="text" placeholder="Đây là" class="input-second" />
            </div>
          </div>

          <div class="text-btn">
            <button>Save</button>
            <button>Save As</button>
          </div>
        </div>
      </divc>
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
