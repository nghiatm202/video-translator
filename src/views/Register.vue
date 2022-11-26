<template>
  <div class="signupFrm">
    <form @submit.prevent="submitHandler" action="" class="form">
      <h1 class="title">Sign up</h1>

      <div class="inputContainer">
        <input type="text" v-model="name" class="input" placeholder="a" />
        <label for="" class="label">Full Name</label>
      </div>

      <div class="inputContainer">
        <input type="text" v-model="username" class="input" placeholder="a" />
        <label for="" class="label">Username</label>
      </div>

      <div class="inputContainer">
        <input type="text" v-model="email" class="input" placeholder="a" />
        <label for="" class="label">Email</label>
      </div>

      <div class="inputContainer">
        <input
          type="password"
          v-model="password"
          class="input"
          placeholder="a"
        />
        <label for="" class="label">Password</label>
      </div>

      <input type="submit" class="submitBtn" value="Sign up" />
    </form>
  </div>
</template>

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
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: green;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
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
import axios from "axios"

export default {
  name: "register",

  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
    }
  },

  methods: {
    async submitHandler() {
      const data = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
      }

      await axios.post("http://dichvideo.xyz/api/v1/auth/register", data)

      this.$router.push("/login")
    },
  },
}
</script>
