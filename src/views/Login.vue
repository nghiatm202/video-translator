<style>
.signupFrm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.title {
  font-size: 50px;
  margin-bottom: 50px;
}

.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
}

.input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

.label {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: #dadce0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
}

::placeholder {
  color: transparent;
}

.submitBtn {
  display: block;
  padding: 15px 30px;
  border: none;
  background-color: green;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.submitBtn:hover {
  background-color: #328427;
}

.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: green;
}

.input:not(:placeholder-shown) + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
}

.input:focus {
  border: 2px solid green;
}
</style>

<script>
export default {
  name: "LoginPage",
}
</script>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

const store = useStore()
const username = ref("")
const password = ref("")

const submitHandler = async () => {
  const data = {
    username: username.value,
    password: password.value,
  }

  store.commit("LoginUser", data)
}
</script>

<template>
  <div class="signupFrm">
    <!-- <form @submit.prevent="submitHandler" action="" class="form"> -->
    <div class="form">
      <h1 class="title">Login</h1>

      <div class="inputContainer">
        <input type="text" v-model.lazy="username" class="input" placeholder="a" />
        <label for="" class="label">Username</label>
      </div>

      <div class="inputContainer">
        <input
          type="password"
          v-model.lazy="password"
          class="input"
          placeholder="a"
        />
        <label for="" class="label">Password</label>
      </div>

      <div>
        <!-- <input type="submit" class="submitBtn" value="Login" /> -->
        <button class="submitBtn"  @click="submitHandler()">
          Login
        </button>
      </div>
    </div>
    <!-- </form> -->
  </div>
</template>
