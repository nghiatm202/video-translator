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

.layout__buttons__component {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 10px;
}

.layout__buttons__component .submitBtn,
.layout__buttons__component .btn-primary,
.layout__buttons__component .btn-danger {
  display: block;
  /* margin-left: auto; */
  padding: 15px 30px;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.layout__buttons__component .submitBtn {
  background-color: #328427;
}
.layout__buttons__component .btn-primary {
  background-color: #4596ed;
}
.layout__buttons__component .btn-danger {
  background-color: #ee5449;
}

/* .submitBtn { */
/* margin-top: 30px; */
/* } */

.submitBtn:hover {
  background-color: #328427;
}
</style>

<script>
export default {
  name: "RegisterPage",
}
</script>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()
const registerUser = ref({
  name: "",
  username: "",
  email: "",
  password: "",
})

const goBackLastPage = () => {
  return router.push("/")
}
const goLoginPage = () => {
  return router.replace({ name: 'login' });
}

const submitHandler = () => {
  const data = {
    name: registerUser.value.name,
    username: registerUser.value.username,
    email: registerUser.value.email,
    password: registerUser.value.password,
  }

  store.commit("Register", data)
}
</script>

<template>
  <div class="signupFrm">
    <div class="form">
      <h1 class="title">Sign up</h1>

      <div class="inputContainer">
        <input
          type="text"
          v-model="registerUser.name"
          class="input"
          placeholder="a"
        />
        <label for="" class="label">Full Name</label>
      </div>

      <div class="inputContainer">
        <input
          type="text"
          v-model="registerUser.username"
          class="input"
          placeholder="a"
        />
        <label for="" class="label">Username</label>
      </div>

      <div class="inputContainer">
        <input
          type="text"
          v-model="registerUser.email"
          class="input"
          placeholder="a"
        />
        <label for="" class="label">Email</label>
      </div>

      <div class="inputContainer">
        <input
          type="password"
          v-model="registerUser.password"
          class="input"
          placeholder="a"
        />
        <label for="" class="label">Password</label>
      </div>

      <div class="layout__buttons__component">
        <button class="btn-danger" @click="goBackLastPage()">Prev page</button>
        <button class="btn-primary" @click="goLoginPage()">Login</button>
        <button class="submitBtn" @click="submitHandler()">Sign up</button>
      </div>
    </div>
  </div>
</template>
